import { cookies } from "next/headers";
import type { Theme } from "./shared";

/** Theme saved by the toggle; light is the default. */
export async function getTheme(): Promise<Theme> {
  const value = (await cookies()).get("theme")?.value;
  return value === "dark" ? "dark" : "light";
}
