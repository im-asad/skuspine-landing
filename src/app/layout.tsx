import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Sans } from "next/font/google";
import { getTheme } from "@/components/landing/theme";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// The page layout depends on the theme cookie, so render it per request.
export const instant = false;

export const metadata: Metadata = {
  title: "skuspine · Order fulfillment on autopilot",
  description:
    "Ship 10x the orders with the same team. No copying addresses, no buying labels, no chasing tracking numbers. skuspine runs it for every order, autonomously.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={await getTheme()}
      className={`${plexMono.variable} ${plexSans.variable} ${instrumentSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
