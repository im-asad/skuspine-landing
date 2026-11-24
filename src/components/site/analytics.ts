import { sendGTMEvent } from "@next/third-parties/google";

/** Google Tag Manager container. Public by design: it is visible in the page source. */
export const GTM_ID = "GTM-PL3HNQL6";

export type Consent = "granted" | "denied";
export const CONSENT_COOKIE = "analytics_consent";

export type AnalyticsEvent = "demo_open" | "demo_step" | "demo_abandon" | "demo_complete" | "login_click" | "email_click";

/** Send an event to Google Tag Manager, only if the visitor accepted analytics. Never pass personal data or form answers. */
export function track(event: AnalyticsEvent, params: { button_location?: string; step?: number } = {}) {
  if (!document.cookie.split("; ").includes(`${CONSENT_COOKIE}=granted`)) return;
  // GTM remembers earlier values, so clear the ones this event doesn't set.
  sendGTMEvent({ event, button_location: undefined, step: undefined, ...params });
}

/** Which part of the page a clicked element sits in. */
export function clickLocation(el: Element, fallback: string) {
  if (el.closest("footer")) return "footer";
  if (el.closest("header")) return "header";
  if (el.closest("nav")) return "menu";
  return fallback;
}
