import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import ThemeProvider from "@/components/site/ThemeProvider";
import { getTheme } from "@/components/site/theme";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Every page is themed from the theme cookie, so render per request.
export const instant = false;

export const metadata: Metadata = {
  title: "skuspine · Order fulfillment on autopilot",
  description:
    "Ship 10x the orders with the same team. No copying addresses, no buying labels, no chasing tracking numbers. skuspine runs it for every order, autonomously.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const theme = await getTheme();
  return (
    <html lang="en" data-theme={theme} className={`${plexMono.variable} ${instrumentSans.variable}`}>
      <body>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
