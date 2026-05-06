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
  metadataBase: new URL("https://www.efssolar.co.nz"),
  title: {
    default: "EFS Solar | Certified Solar Installers across New Zealand",
    template: "EFS Solar | %s",
  },
  description:
    "EFS Solar — Trusted solar installers across New Zealand. Residential solar, commercial solar & battery storage. Get a free quote today.",
  keywords: [
    "solar panels New Zealand",
    "solar installation Auckland",
    "solar installation Hamilton",
    "residential solar NZ",
    "commercial solar New Zealand",
    "solar battery storage NZ",
    "Energizer solar battery",
    "solar energy NZ",
    "EFS Solar",
    "certified solar installer NZ",
    "solar system upgrade New Zealand",
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
    locale: "en_NZ",
    url: "https://www.efssolar.co.nz",
    siteName: "EFS Solar",
    title: "EFS Solar | Solar Panels across New Zealand",
    description:
      "Certified solar installers serving Hamilton, Auckland, Wellington, Christchurch & more. Residential solar, battery storage & commercial solar solutions.",
    images: [
      {
        url: "/assets/DJI_20250612122357_0110_D-copy-2.webp",
        width: 1200,
        height: 630,
        alt: "EFS Solar — Solar Installation New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EFS Solar | Solar Panels across New Zealand",
    description:
      "Certified solar installers serving New Zealand. Residential solar, batteries & commercial solar.",
    images: ["/assets/DJI_20250612122357_0110_D-copy-2.webp"],
  },
  alternates: {
    canonical: "https://www.efssolar.co.nz",
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${rajdhani.variable} ${saira.variable} ${rubik.variable}`}>
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
