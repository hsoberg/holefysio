import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Fysioterapi, manuellterapi og psykolog på Røyse`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Tverrfaglig helseklinikk på Vik Torg, Røyse. Fysioterapi, manuellterapi, ultralyddiagnostikk, psykomotorisk fysioterapi og psykolog. Frikortordning. Ring 32 15 98 20.",
  keywords: [
    "fysioterapi Røyse",
    "manuellterapeut Hole",
    "helseklinikk Ringerike",
    "fysioterapeut Hole kommune",
    "psykolog Røyse",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: site.url,
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nb-NO"
      className={`${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Hopp til hovedinnhold
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
