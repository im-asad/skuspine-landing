/** Options and labels for the demo request form, shared by the form and the email it sends. */

export const ROLES = [
  "Founder or Owner",
  "CEO or Managing Director",
  "Head of Operations",
  "E-Commerce Manager",
  "Warehouse or Fulfilment Manager",
  "Finance Lead",
  "Other",
];
export const CHANNELS = ["Amazon", "Shopify", "eBay", "TikTok Shop", "WooCommerce", "Etsy", "My own site", "Somewhere else"];
export const ORDERS = ["Under 500", "500 – 2,000", "2,000 – 10,000", "10,000 – 50,000", "50,000+"];
export const TEAM = ["Just me", "2 – 5 people", "6 – 15 people", "16+ people", "An outsourced 3PL"];
export const LOCATIONS = ["One location", "2 – 3 locations", "4+ locations", "Mostly a 3PL"];
export const REVENUE = ["Under £250k", "£250k – £1m", "£1m – £5m", "£5m – £20m", "£20m+", "Rather not say"];
export const PAINS = ["Buying labels", "Keeping stock in sync", "Packing mistakes", "Returns and refunds", "Knowing my margins", "Repricing and promotions"];
export const TIMING = ["As soon as possible", "In the next 3 months", "Later this year", "Just exploring"];

export type Answers = Record<string, string | string[] | null>;

/** Every answer key in display order, with the label used in the email. */
export const ANSWER_LABELS: [key: string, label: string][] = [
  ["name", "Full name"],
  ["email", "Work email"],
  ["role", "Role"],
  ["company", "Company name"],
  ["site", "Main store or website"],
  ["ch", "Sells on"],
  ["orders", "Orders in a typical month"],
  ["team", "Who handles orders today"],
  ["loc", "Where orders ship from"],
  ["rev", "Annual turnover"],
  ["pain", "Wants off their plate"],
  ["time", "Wants to be up and running"],
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (v: Answers[string]) => (typeof v === "string" ? v.trim() : "");
const asList = (v: Answers[string]) => (Array.isArray(v) ? v : []);

/** Required-field errors for one step of the form (0 to 3), keyed by answer key. */
export function validateStep(step: number, ans: Answers): Record<string, string> {
  const errors: Record<string, string> = {};
  if (step === 0) {
    if (!asText(ans.name)) errors.name = "Please enter your full name.";
    if (!asText(ans.email)) errors.email = "Please enter your work email.";
    else if (!EMAIL_PATTERN.test(asText(ans.email))) errors.email = "Please enter a valid email address.";
    if (!asText(ans.role)) errors.role = "Please choose your role to continue.";
  } else if (step === 1) {
    if (!asText(ans.company)) errors.company = "Please enter your company name.";
    if (!asList(ans.ch).length) errors.ch = "Please pick at least one.";
  } else if (step === 2) {
    if (!asText(ans.orders)) errors.orders = "Please pick one.";
    if (!asText(ans.team)) errors.team = "Please pick one.";
    if (!asText(ans.loc)) errors.loc = "Please pick one.";
  } else if (step === 3) {
    if (!asList(ans.pain).length) errors.pain = "Please pick at least one.";
    if (!asText(ans.time)) errors.time = "Please pick one.";
  }
  return errors;
}
