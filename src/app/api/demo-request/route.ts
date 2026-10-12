import nodemailer from "nodemailer";
import { ANSWER_LABELS, EMAIL_PATTERN, validateStep, type Answers } from "@/components/site/demoQuestions";

type Stage = "incomplete" | "completed";

/** How an incomplete form ended. */
const EXIT_REASONS: Record<string, string> = {
  closed: "closed the form",
  left: "left or closed the page",
};

const MAX_LENGTH = 300;

/** Keep only known keys, trim strings and cap their length. */
function clean(raw: unknown): Answers {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const answers: Answers = {};
  for (const [key] of ANSWER_LABELS) {
    const value = input[key];
    if (typeof value === "string") answers[key] = value.trim().slice(0, MAX_LENGTH);
    else if (Array.isArray(value)) answers[key] = value.filter((v): v is string => typeof v === "string").slice(0, 20).map((v) => v.slice(0, MAX_LENGTH));
  }
  return answers;
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function display(value: Answers[string]) {
  if (Array.isArray(value)) return value.join(", ");
  return value || "";
}

function buildEmail(stage: Stage, answers: Answers, stoppedAt: number, reason: string) {
  const name = display(answers.name);
  const company = display(answers.company);
  const subject =
    stage === "completed"
      ? `Demo request: ${name}${company ? ` (${company})` : ""}`
      : `Incomplete demo request (stopped at step ${stoppedAt} of 4): ${name}${company ? ` (${company})` : ""}`;
  const intro =
    stage === "completed"
      ? "Someone finished the demo form and was sent to Calendly to pick a time."
      : `Someone started the demo form but ${reason} at step ${stoppedAt} of 4, so they did not reach Calendly. Here is everything they entered.`;
  const rows = ANSWER_LABELS.map(([key, label]) => [label, display(answers[key]) || "Not answered"] as const);

  const text = `${intro}\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}`;
  const html = `<p>${escapeHtml(intro)}</p><table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(([label, value]) => `<tr><td style="color:#5B6052;vertical-align:top">${escapeHtml(label)}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`)
    .join("")}</table>`;
  return { subject, text, html };
}

export async function POST(request: Request) {
  // Only accept submissions from this site's own pages.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: { stage?: unknown; answers?: unknown; stoppedAt?: unknown; reason?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const stage: Stage = body.stage === "completed" ? "completed" : "incomplete";
  const stoppedAt = Math.min(4, Math.max(1, Math.round(Number(body.stoppedAt)) || 1));
  const reason = EXIT_REASONS[String(body.reason)] ?? EXIT_REASONS.left;
  const answers = clean(body.answers);
  const steps = stage === "completed" ? [0, 1, 2, 3] : [0];
  const invalid = steps.some((step) => Object.keys(validateStep(step, answers)).length > 0);
  if (invalid) return Response.json({ error: "Missing required answers" }, { status: 400 });

  const { SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_USER || !SMTP_PASSWORD) {
    console.error("[demo-request] SMTP_USER / SMTP_PASSWORD are not set, so this submission was not emailed:", answers);
    return Response.json({ error: "Email is not configured" }, { status: 500 });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.purelymail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const { subject, text, html } = buildEmail(stage, answers, stoppedAt, reason);
  const replyTo = display(answers.email);
  try {
    await transport.sendMail({
      from: process.env.DEMO_REQUEST_FROM || `skuspine website <${SMTP_USER}>`,
      to: process.env.DEMO_REQUEST_TO || "getintouch@skuspine.com",
      replyTo: EMAIL_PATTERN.test(replyTo) ? replyTo : undefined,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[demo-request] SMTP send failed:", err, answers);
    return Response.json({ error: "Could not send email" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
