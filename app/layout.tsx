import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  metadataBase: new URL("https://natasha-khanye-portfolio.vercel.app"),
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
    url: "https://natasha-khanye-portfolio.vercel.app",
    siteName: "Natasha Khanye Portfolio",
    title: "Natasha Nomzamo Khanye | Urban & Regional Planner",
    description:
      "Graduate Urban and Regional Planner specializing in sustainable development and green infrastructure.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://natasha-khanye-portfolio.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={`${inter.variable} ${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
