import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.name} | ${site.tagline}`,
  description:
    "2HD are a premium four-piece live band from West Northamptonshire playing rock, punk, indie, new wave and alternative pop.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: "Watch 2HD, check availability, and book a premium live band for your venue or event.",
    url: site.domain,
    siteName: site.fullName,
    images: ["/assets/images/hero-poster.jpg"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
