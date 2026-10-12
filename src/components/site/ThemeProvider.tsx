"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { SANS, THEME_TOKENS, type Theme } from "./shared";

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

/** Holds the light/dark choice, persists it in a cookie and exposes the colour tokens as CSS variables. */
export default function ThemeProvider({ initialTheme, children }: { initialTheme: Theme; children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ ...THEME_TOKENS[theme], background: "var(--bg)", color: "var(--fg)", fontFamily: SANS, minHeight: "100vh" }}>{children}</div>
    </ThemeContext.Provider>
  );
}

/** Light/dark switch. `compact` is the smaller tablet size. */
export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      style={{ width: compact ? 40 : 44, height: compact ? 40 : 44, padding: 0, borderRadius: compact ? 8 : 6, background: "var(--surf)", border: "1px solid var(--line2)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
    >
      {theme === "dark" ? (
        <svg width={compact ? 17 : 18} height={compact ? 17 : 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width={compact ? 17 : 18} height={compact ? 17 : 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
