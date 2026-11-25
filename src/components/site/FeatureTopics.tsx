"use client";

/** Jumps to a topic on the features page. Buttons, not links, so the address bar stays clean. */
export default function FeatureTopics({ topics }: { topics: { id: string; label: string }[] }) {
  const jump = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.focus({ preventScroll: true });
    section.scrollIntoView({ behavior: still ? "auto" : "smooth" });
  };
  return (
    <div className="pg-topics" role="group" aria-label="Jump to a topic">
      {topics.map((t) => (
        <button key={t.id} type="button" onClick={() => jump(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
