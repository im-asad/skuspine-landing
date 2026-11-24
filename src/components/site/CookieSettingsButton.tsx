"use client";

import { createContext, useContext, type CSSProperties } from "react";

export const CookieSettingsContext = createContext<() => void>(() => {});

/** Footer link that reopens the cookie choice. */
export default function CookieSettingsButton({ style }: { style?: CSSProperties }) {
  const open = useContext(CookieSettingsContext);
  return (
    <button type="button" onClick={open} style={{ padding: 0, border: 0, background: "transparent", font: "inherit", textAlign: "left", cursor: "pointer", ...style }}>
      Cookie settings
    </button>
  );
}
