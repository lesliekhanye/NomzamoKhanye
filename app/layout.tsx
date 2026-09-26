import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomzamokhanye.info"),
  title: {
    default: "Natasha Nomzamo Khanye | Urban & Regional Planner",
    template: "%s | Natasha Khanye",
  },
  description:
    "Graduate Urban and Regional Planner specializing in sustainable development, informal settlement upgrading, and green infrastructure. BSc 2023 Northwest University.",
  keywords: [
    "urban planning",
    "regional planning",
    "sustainable cities",
    "green infrastructure",
    "informal settlements",
    "housing development",
    "urban design",
    "South Africa",
    "sustainable development",
    "public participation",
    "environmental planning",
  ],
  authors: [{ name: "Natasha Nomzamo Khanye" }],
  creator: "Natasha Nomzamo Khanye",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomzamokhanye.info",
    siteName: "Natasha Khanye Portfolio",
    title: "Natasha Nomzamo Khanye | Urban & Regional Planner",
    description:
      "Graduate Urban and Regional Planner specializing in sustainable development and green infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Natasha Nomzamo Khanye - Urban Planner Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natasha Nomzamo Khanye | Urban & Regional Planner",
    description:
      "Graduate Urban and Regional Planner specializing in sustainable development and green infrastructure.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/NK.png", apple: "/NK.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
