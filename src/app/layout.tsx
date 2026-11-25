import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { getConsent } from "@/components/site/consent";
import CookieConsent from "@/components/site/CookieConsent";
import { SITE_URL } from "@/components/site/seo";
import { SiteJsonLd } from "@/components/site/structuredData";
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
  metadataBase: new URL(SITE_URL),
  title: "skuspine",
};

// Runs before paint so nothing flashes at the wrong size:
// --dz scales the 1440px desktop design to fit screens between 1025px and 1439px wide;
// --hz scales the 1182px hero demo to the width it has on tablets (40px side padding) and phones (20px).
const fitDesktopScript = `(function(){var r=document.documentElement;function f(){var w=r.clientWidth;r.style.setProperty("--dz",w>1024&&w<1440?String(w/1440):"1");r.style.setProperty("--hz",w>1024?"1":String(Math.min(1,(w-(w<600?40:80))/1182)))}f();addEventListener("resize",f)})()`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [theme, consent] = await Promise.all([getTheme(), getConsent()]);
  return (
    <html lang="en" data-theme={theme} className={`${plexMono.variable} ${instrumentSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fitDesktopScript }} />
      </head>
      <body>
        <SiteJsonLd />
        <ThemeProvider initialTheme={theme}>
          <CookieConsent initialConsent={consent}>{children}</CookieConsent>
        </ThemeProvider>
      </body>
    </html>
  );
}
