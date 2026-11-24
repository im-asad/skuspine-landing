"use client";

import { useEffect } from "react";
import { analyticsAllowed, track } from "./analytics";

const SCROLL_PERCENTS = [25, 50, 75, 100];
const TIME_SECONDS = [10, 30, 60, 120, 300];

/**
 * Reports how far down the page visitors scroll, how long they took to get there, and how long they view it.
 * Only time with the tab visible counts, and nothing is measured until the visitor accepts analytics.
 */
export function useEngagementTracking() {
  useEffect(() => {
    const scrollLeft = [...SCROLL_PERCENTS];
    const timeLeft = [...TIME_SECONDS];
    let seconds = 0;

    const timer = setInterval(() => {
      if (document.hidden || !analyticsAllowed()) return;
      seconds += 1;
      if (seconds === timeLeft[0]) track("time_on_page", { time_milestone: timeLeft.shift() });
    }, 1000);

    const onScroll = () => {
      if (!scrollLeft.length || !analyticsAllowed()) return;
      const reached = ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
      // Allow for sub-pixel rounding at the very bottom.
      while (scrollLeft.length && reached >= scrollLeft[0] - 0.5) track("scroll_depth", { scroll_percent: scrollLeft.shift(), scroll_seconds: seconds });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
