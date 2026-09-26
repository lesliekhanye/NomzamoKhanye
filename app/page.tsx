import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title:
    "Natasha Nomzamo Khanye | Urban & Regional Planner | Sustainable Cities",
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
    title: "Natasha Nomzamo Khanye | Urban & Regional Planner",
    description:
      "Graduate Urban and Regional Planner specializing in sustainable development and green infrastructure.",
    url: "https://nomzamokhanye.info",
    siteName: "Natasha Khanye Portfolio",
    type: "website",
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
  icons: {
    icon: "/NK.png",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
