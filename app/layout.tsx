import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/layout/LayoutClient";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pikquick.com"),
  title: "PikQuick - Get Errands Done Without Leaving Your Seat",
  description:
    "From deliveries to queue standing, hire trusted people nearby to handle your errands fast, safe, and stress-free.",
  keywords: [
    "errand service",
    "delivery service",
    "queue standing",
    "personal errands",
    "on-demand errands",
    "Lagos errands",
    "Nigeria errand service",
  ],
  authors: [{ name: "PikQuick" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PikQuick - Get Errands Done Without Leaving Your Seat",
    description:
      "From deliveries to queue standing, hire trusted people nearby to handle your errands fast, safe, and stress-free.",
    url: "https://pikquick.com",
    siteName: "PikQuick",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PikQuick errand service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PikQuick - Get Errands Done Without Leaving Your Seat",
    description:
      "From deliveries to queue standing, hire trusted people nearby to handle your errands fast, safe, and stress-free.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YOUR_REAL_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
