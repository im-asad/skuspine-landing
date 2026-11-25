"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { noteDemoClick } from "./analytics";

/** A "Book a demo" link to the demo page. `location` is reported to analytics outside the header, menu and footer. */
export default function DemoLink({ className, location = "hero", onClick, children }: { className?: string; location?: string; onClick?: () => void; children: ReactNode }) {
  return (
    <Link
      href="/demo"
      className={className}
      onClick={(e) => {
        // A new tab starts fresh and reports itself as opened directly.
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) noteDemoClick(e.currentTarget, location);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
