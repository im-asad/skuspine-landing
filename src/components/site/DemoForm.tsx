"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { CHANNELS, LOCATIONS, ORDERS, PAINS, REVENUE, ROLES, TEAM, TIMING, validateStep, type Answers } from "./demoQuestions";
import { CALENDLY_URL, INK, LIME, MONO } from "./shared";

const title: CSSProperties = { margin: 0, fontFamily: MONO, fontSize: 28, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.2 };
const lead: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--muted)" };
const label: CSSProperties = { fontSize: 14, fontWeight: 600 };
const input: CSSProperties = { height: 50, width: "100%", boxSizing: "border-box", padding: "0 14px", background: "var(--card)", border: "1px solid var(--line2)", borderRadius: 10, color: "var(--fg)", fontSize: 16, fontFamily: "inherit" };
const ghostButton: CSSProperties = { height: 50, padding: "0 20px", background: "transparent", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 10, fontFamily: "inherit", fontSize: 16, fontWeight: 500, cursor: "pointer" };
const primaryButton: CSSProperties = { height: 50, padding: "0 24px", background: LIME, color: INK, border: 0, borderRadius: 10, fontFamily: "inherit", fontSize: 16, fontWeight: 600, cursor: "pointer" };

function StepIntro({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h3 id="df-title" style={title}>
        {heading}
      </h3>
      <p style={lead}>{children}</p>
    </div>
  );
}

type Report = { stage: "completed"; answers: Answers } | { stage: "incomplete"; answers: Answers; stoppedAt: number; reason: "closed" | "left" };

/** Send a submission to be emailed. `sendBeacon` survives the page closing, so use it when the visitor is leaving. */
function postReport(report: Report, leaving: boolean) {
  const body = JSON.stringify(report);
  if (leaving && navigator.sendBeacon?.("/api/demo-request", new Blob([body], { type: "application/json" }))) return Promise.resolve();
  return fetch("/api/demo-request", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).then(
    () => {},
    () => {},
  );
}

export default function DemoForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ans, setAns] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);

  // Exactly one email per submission: complete if they finish, incomplete if they bail out after step 1.
  const reported = useRef(false);
  const latest = useRef({ step, ans });
  useEffect(() => {
    latest.current = { step, ans };
  });

  const reportIncomplete = useCallback((reason: "closed" | "left") => {
    const { step: current, ans: answers } = latest.current;
    // Nothing to send until they have given us their contact details on step 1.
    if (reported.current || current < 1) return;
    reported.current = true;
    postReport({ stage: "incomplete", answers, stoppedAt: current + 1, reason }, true);
  }, []);

  useEffect(() => {
    const onLeave = () => reportIncomplete("left");
    window.addEventListener("pagehide", onLeave);
    return () => window.removeEventListener("pagehide", onLeave);
  }, [reportIncomplete]);

  const close = () => {
    reportIncomplete("closed");
    onClose();
  };

  const text = (key: string) => (ans[key] as string | undefined) ?? "";
  const setText = (key: string, value: string) => {
    setAns((cur) => ({ ...cur, [key]: value }));
    setErrors((cur) => ({ ...cur, [key]: "" }));
  };

  const errorText = (key: string) =>
    errors[key] ? (
      <span id={`df-${key}-error`} style={{ fontSize: 13, color: "var(--warntext)" }}>
        {errors[key]}
      </span>
    ) : null;

  const pick = (key: string, value: string, multi: boolean) => {
    setErrors((cur) => ({ ...cur, [key]: "" }));
    setAns((cur) => {
      if (multi) {
        const arr = (cur[key] as string[] | undefined) ?? [];
        return { ...cur, [key]: arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value] };
      }
      return { ...cur, [key]: cur[key] === value ? null : value };
    });
  };

  const optional = <span style={{ fontWeight: 400, color: "var(--muted)" }}> (optional)</span>;

  const field = (id: string, key: string, labelText: string, type: string, placeholder: string, autoComplete: string, required = true) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={id} style={label}>
        {labelText}
        {!required && optional}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `df-${key}-error` : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={text(key)}
        onChange={(e) => setText(key, e.target.value)}
        style={{ ...input, borderColor: errors[key] ? "var(--warn)" : "var(--line2)" }}
      />
      {errorText(key)}
    </div>
  );

  const group = (key: string, question: string, options: string[], multi: boolean, hint?: string, required = true) => (
    <div role="group" aria-label={question} aria-describedby={errors[key] ? `df-${key}-error` : undefined} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={label}>
          {question}
          {!required && optional}
        </span>
        {hint && <span style={{ fontSize: 13, color: "var(--muted)" }}>{hint}</span>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {options.map((option) => {
          const on = multi ? ((ans[key] as string[] | undefined) ?? []).includes(option) : ans[key] === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => pick(key, option, multi)}
              aria-pressed={on}
              style={{ padding: "10px 14px", borderRadius: 999, border: `1px solid ${on ? LIME : "var(--line2)"}`, background: on ? LIME : "var(--card)", color: on ? INK : "var(--fg)", fontFamily: "inherit", fontSize: 15, fontWeight: 500, cursor: "pointer" }}
            >
              {option}
            </button>
          );
        })}
      </div>
      {errorText(key)}
    </div>
  );

  /** Show this step's required-field errors; returns true when the step is complete. */
  const checkStep = () => {
    const found = validateStep(step, ans);
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const goNext = () => {
    if (!checkStep()) return;
    setStep((s) => s + 1);
  };

  /** Send the visitor to Calendly with their name and email pre-filled. */
  const goToCalendly = async () => {
    if (!checkStep() || submitting) return;
    setSubmitting(true);
    // Wait briefly for the email to go out, but never keep the visitor waiting for long.
    reported.current = true;
    await Promise.race([postReport({ stage: "completed", answers: ans }, false), new Promise((r) => setTimeout(r, 4000))]);
    const url = new URL(CALENDLY_URL);
    const name = text("name").trim();
    // Calendly fills either a single name field or separate first/last name fields.
    const [first, ...rest] = name.split(/\s+/);
    url.searchParams.set("name", name);
    url.searchParams.set("first_name", first);
    if (rest.length) url.searchParams.set("last_name", rest.join(" "));
    url.searchParams.set("email", text("email").trim());
    window.location.assign(url.toString());
  };

  const stepBody: CSSProperties = { display: "flex", flexDirection: "column", gap: 26 };
  const twoCol: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(14,15,12,0.62)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "104px 0 40px", boxSizing: "border-box", overflowY: "auto" }}>
      <div role="dialog" aria-modal="true" aria-labelledby="df-title" style={{ width: 660, flexShrink: 0, background: "var(--surf)", color: "var(--fg)", border: "1px solid var(--line2)", borderRadius: 18, boxShadow: "0 40px 110px rgba(14,15,12,0.45)", overflow: "hidden", textAlign: "left" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 28px", borderBottom: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: MONO, fontSize: 13 }}>
            <span style={{ background: LIME, color: INK, padding: "3px 8px", borderRadius: 5, fontWeight: 600 }}>Book a demo</span>
            <span style={{ color: "var(--muted)" }}>Step {step + 1} of 4</span>
          </div>
          <button type="button" onClick={close} aria-label="Close" style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--line2)", background: "var(--card)", color: "var(--fg)", fontSize: 18, lineHeight: 1, cursor: "pointer" }}>
            ×
          </button>
        </div>
        <div style={{ height: 4, background: "var(--line)" }}>
          <div style={{ height: 4, width: `${Math.min(100, (step + 1) * 25)}%`, background: LIME, transition: "width 240ms ease" }} />
        </div>

        <div style={{ padding: "32px 28px 28px" }}>
          {step === 0 && (
            <div style={stepBody}>
              <StepIntro heading="First, who are we speaking with?">
                It takes about a minute. Your answers shape the demo, so we walk through your channels and your kind of orders instead of a generic tour.
              </StepIntro>
              <div style={twoCol}>
                {field("df-name", "name", "Full name", "text", "Jane Smith", "name")}
                {field("df-email", "email", "Work email", "email", "jane@yourstore.com", "email")}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="df-role" style={label}>
                  Your role
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    id="df-role"
                    required
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? "df-role-error" : undefined}
                    autoComplete="organization-title"
                    value={text("role")}
                    onChange={(e) => setText("role", e.target.value)}
                    style={{ ...input, color: text("role") ? "var(--fg)" : "var(--muted)", borderColor: errors.role ? "var(--warn)" : "var(--line2)", cursor: "pointer", appearance: "none", WebkitAppearance: "none", paddingRight: 48 }}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {ROLES.map((role) => (
                      <option key={role} value={role} style={{ color: "var(--fg)" }}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "var(--muted)", pointerEvents: "none" }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {errorText("role")}
              </div>
            </div>
          )}
          {step === 1 && (
            <div style={stepBody}>
              <StepIntro heading="Tell us about the business">So we can connect the right stores before we meet.</StepIntro>
              <div style={twoCol}>
                {field("df-company", "company", "Company name", "text", "Acme Goods Ltd", "organization")}
                {field("df-site", "site", "Main store or website", "url", "yourstore.com", "url", false)}
              </div>
              {group("ch", "Where do you sell today?", CHANNELS, true, "Pick all that apply.")}
            </div>
          )}
          {step === 2 && (
            <div style={stepBody}>
              <StepIntro heading="How busy does it get?">A rough idea is plenty. It helps us show you dispatch at the volume you actually run.</StepIntro>
              {group("orders", "Orders in a typical month", ORDERS, false)}
              {group("team", "Who handles orders today?", TEAM, false)}
              {group("loc", "Where do orders ship from?", LOCATIONS, false)}
            </div>
          )}
          {step === 3 && (
            <div style={stepBody}>
              <StepIntro heading="Where you're headed">Last step. This lets us suggest the right plan and focus on what matters most to you.</StepIntro>
              {group("rev", "Roughly where does annual turnover sit?", REVENUE, false, "Ballpark is fine, and you can skip it.", false)}
              {group("pain", "What would you most like off your plate?", PAINS, true, "Pick any that apply.")}
              {group("time", "When would you like to be up and running?", TIMING, false)}
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 28px", borderTop: "1px solid var(--line)", background: "var(--card)" }}>
          <div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => {
                  setErrors({});
                  setStep((s) => Math.max(0, s - 1));
                }}
                style={ghostButton}
              >
                ← Back
              </button>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>No commitment. No card needed.</span>
            <button type="button" onClick={step < 3 ? goNext : goToCalendly} disabled={submitting} style={{ ...primaryButton, opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}>
              {step < 3 ? "Continue →" : submitting ? "Opening Calendly…" : "Pick a time on Calendly →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
