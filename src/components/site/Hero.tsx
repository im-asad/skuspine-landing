import Link from "next/link";
import DemoLink from "./DemoLink";
import HeroMedia from "./HeroMedia";
import { EYEBROW, SUBHEAD } from "./landingContent";

/** The hero, shared by every screen size so the page has a single h1. Sizes switch via the hero-* classes. */
export default function Hero({ tick }: { tick: number }) {
  return (
    <div className="desk-frame hero-frame">
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="hero-badge">BETA</span>
          {EYEBROW}
        </div>
        <h1>
          <span className="hero-title">
            <span className="hero-line">Order fulfillment</span> <br />
            <span className="hero-line">on autopilot.</span>
          </span>
        </h1>
        <p>{SUBHEAD}</p>
        <div className="hero-actions">
          <DemoLink className="hero-primary">Book a demo →</DemoLink>
          <Link href="/how-it-works" className="hero-secondary">
            See how it works
          </Link>
        </div>

        {/* Product demo (plays as a video once one is added) */}
        <HeroMedia tick={tick} />
      </section>
    </div>
  );
}
