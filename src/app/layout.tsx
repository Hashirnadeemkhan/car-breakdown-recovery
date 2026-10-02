import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Car Breakdown Recovery Leeds | 24/7 Roadside Assistance | Emergency Help",
    template: "%s | Car Breakdown Recovery Leeds",
  },
  description:
    "24/7 professional car breakdown recovery and roadside assistance across Leeds and surrounding areas. Jump start, fuel delivery, tyre replacement. Fast response times guaranteed. Call +44 7886 003475.",
  keywords: [
    "breakdown recovery Leeds",
    "car breakdown assistance",
    "roadside recovery",
    "24/7 breakdown service",
    "emergency car assistance",
    "jump start service Leeds",
    "fuel delivery service",
    "tyre replacement roadside",
    "breakdown recovery service",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title:
      "Car Breakdown Recovery Leeds | 24/7 Emergency Roadside Assistance",
    description:
      "Professional breakdown recovery and roadside assistance available 24/7 across Leeds and surrounding areas. Fast response times, professional service. Call now.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/logojpeg.jpeg", width: 1024, height: 1024, alt: site.name }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Breakdown Recovery Leeds",
    description:
      "24/7 emergency breakdown recovery & roadside assistance across Leeds and surrounding areas.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: `${site.url}/logo.png`,
  "@id": site.url,
  url: site.url,
  telephone: site.phoneDisplay,
  description:
    "24/7 professional car breakdown recovery and roadside assistance services across Leeds and surrounding areas",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 53.7275, longitude: -1.5274 },
  areaServed: [
    "Leeds",
    "Bradford",
    "Huddersfield",
    "Wakefield",
    "Halifax",
    "Morley",
    "Sheffield",
    "Manchester",
    "Doncaster",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "£",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${anton.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
