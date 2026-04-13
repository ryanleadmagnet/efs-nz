import type { Metadata } from "next";
import { Rajdhani, Saira, Rubik } from "next/font/google";
import Script from "next/script";
import ScrollObserver from "@/components/ScrollObserver";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.efssolar.com.au"),
  title: {
    default: "EFS Solar | Certified Solar Panels across QLD & NSW",
    template: "EFS Solar | %s",
  },
  description:
    "EFS Solar — Trusted solar panel installers across QLD & NSW. Residential solar, commercial solar, battery storage & Tesla Powerwall. Get a free quote today.",
  keywords: [
    "solar panels Gold Coast",
    "solar installation Sydney",
    "residential solar Gold Coast",
    "commercial solar Queensland",
    "solar battery storage",
    "Tesla Powerwall installer",
    "Energizer solar battery",
    "GoodWe inverter",
    "Canadian Solar panels",
    "solar energy Queensland",
    "EFS Solar",
    "certified solar installer",
    "solar system upgrade",
  ],
  authors: [{ name: "EFS Solar" }],
  creator: "EFS Solar",
  publisher: "EFS Solar",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.efssolar.com.au",
    siteName: "EFS Solar",
    title: "EFS Solar | Solar Panels across QLD & NSW",
    description:
      "Certified solar installers serving Gold Coast and Sydney. Residential solar, battery storage, Tesla Powerwall & commercial solar solutions.",
    images: [
      {
        url: "/assets/DJI_20250612122357_0110_D-copy-2.webp",
        width: 1200,
        height: 630,
        alt: "EFS Solar — Solar Installation Gold Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EFS Solar | Solar Panels across QLD & NSW",
    description:
      "Certified solar installers serving Gold Coast and Sydney. Residential solar, batteries & commercial solar.",
    images: ["/assets/DJI_20250612122357_0110_D-copy-2.webp"],
  },
  alternates: {
    canonical: "https://www.efssolar.com.au",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${rajdhani.variable} ${saira.variable} ${rubik.variable}`}>
      <head>
        <meta name="theme-color" content="rgb(12, 26, 47)" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">
        <ScrollObserver />
        {children}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
