import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollowCursor from "@/components/animations/MouseFollowCursor";
import LoadingScreen from "@/components/animations/LoadingScreen";
import SmoothScroll from "@/components/animations/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AN Marketing | Premium Marketing & Digital Engineering Agency",
  description:
    "AN Marketing scales ambitious brands through high-performance marketing strategies, brand identity design, creative video production, search optimization, and modern React/Next.js platforms.",
  keywords:
    "Marketing agency, brand identity, digital marketing, website development, content production, social media management, strategic consulting",
  authors: [{ name: "AN Marketing" }],
  openGraph: {
    title: "AN Marketing | Premium Marketing & Digital Engineering Agency",
    description:
      "Creative strategy meets modern software engineering. We scale business revenue and build unique digital identities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030303] text-[#f3f4f6] flex flex-col selection:bg-brand-primary/30 selection:text-white">
        <SmoothScroll>
          {/* Loading screen — unmounts after ~1.4s */}
          <LoadingScreen />

          {/* Custom cursor (hidden on mobile) */}
          <MouseFollowCursor />

          {/* Subtle global grid overlay */}
          <div className="fixed inset-0 grid-overlay opacity-[0.35] pointer-events-none z-0" />

          {/* Animated drifting glows that span the full page */}
          <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-brand-primary/[0.06] blur-3xl pointer-events-none z-0 animate-drift" />
          <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-brand-secondary/[0.05] blur-3xl pointer-events-none z-0 animate-drift-slow" />

          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
