"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import LandingSections from "./LandingSections";
import { Footer } from "./shared";
import { SiteHeader } from "./SiteHeader";
import { useEngagementTracking } from "./useEngagementTracking";

/** The landing page. Everything is in the page once and adapts to the screen with CSS. */
export default function Landing() {
  const [tick, setTick] = useState(0);
  useEngagementTracking();

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SiteHeader />

      <Hero tick={tick} />

      <div className="desk-frame hero-frame">
        <LandingSections />
        <Footer />
      </div>
    </>
  );
}
