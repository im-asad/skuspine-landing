import { sendGTMEvent } from "@next/third-parties/google";

/** Google Tag Manager container. Public by design: it is visible in the page source. */
export const GTM_ID = "GTM-PL3HNQL6";

export type Consent = "granted" | "denied";
export const CONSENT_COOKIE = "analytics_consent";

type AnalyticsEvent = "demo_open" | "demo_step" | "demo_abandon" | "demo_complete" | "login_click" | "email_click" | "scroll_depth" | "time_on_page";

type EventParams = { button_location?: string; step?: number; scroll_percent?: number; scroll_seconds?: number; time_milestone?: number };

/** Whether the visitor accepted analytics. */
export const analyticsAllowed = () => document.cookie.split("; ").includes(`${CONSENT_COOKIE}=granted`);

/** Send an event to Google Tag Manager, only if the visitor accepted analytics. Never pass personal data or form answers. */
export function track(event: AnalyticsEvent, params: EventParams = {}) {
  if (!analyticsAllowed()) return;
  // GTM remembers earlier values, so clear the ones this event doesn't set.
  sendGTMEvent({ event, button_location: undefined, step: undefined, scroll_percent: undefined, scroll_seconds: undefined, time_milestone: undefined, ...params });
}

/** Which part of the page a clicked element sits in. */
export function clickLocation(el: Element, fallback: string) {
  if (el.closest("footer")) return "footer";
  if (el.closest("header")) return "header";
  if (el.closest("nav")) return "menu";
  return fallback;
}

let demoSource: string | null = null;

/** Note which button was clicked, so the demo page can report it. */
export function noteDemoClick(el: Element, location: string) {
  // Clicking the link while already on the demo page opens nothing new.
  if (window.location.pathname !== "/demo") demoSource = clickLocation(el, location);
}

/** Where the visitor came from, or "demo_page" if they opened the page directly. */
export function takeDemoSource() {
  const source = demoSource ?? "demo_page";
  demoSource = null;
  return source;
}
