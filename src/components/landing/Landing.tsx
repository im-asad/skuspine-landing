"use client";

import { useEffect, useState } from "react";
import LandingDark from "./LandingDark";
import LandingLight from "./LandingLight";
import type { Theme } from "./shared";

export default function Landing({ initialTheme }: { initialTheme: Theme }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
  };

  return theme === "dark" ? (
    <LandingDark tick={tick} onToggleTheme={toggleTheme} />
  ) : (
    <LandingLight tick={tick} onToggleTheme={toggleTheme} />
  );
}
