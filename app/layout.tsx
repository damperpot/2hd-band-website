import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "2HD | Live Covers Band in Daventry & the Midlands",
    template: "%s | 2HD"
  },
  description:
    "2HD are a four-piece live covers band based near Daventry, playing rock, punk, indie, new wave and alternative pop across the Midlands.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "2HD | Live Covers Band in Daventry & the Midlands",
    description: "Watch 2HD, check availability and book a live band for your venue or event.",
    url: site.domain,
    siteName: site.fullName,
    locale: "en_GB",
    images: [
      {
        url: "/assets/images/2hd-band-social.jpg",
        width: 1200,
        height: 630,
        alt: "The four members of 2HD together after a show"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: "Watch 2HD, check availability, and book a premium live band for your venue or event.",
    images: ["/assets/images/2hd-band-social.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
