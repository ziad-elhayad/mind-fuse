import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

// Navbar can SSR (it has no browser-only deps besides scroll detection which
// degrades gracefully) — renders instantly without flash
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: true,
  loading: () => <div className="h-20" aria-hidden="true" />,
});

// Primary font — preloaded to prevent FOUT on initial paint
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Mono font — secondary, no preload needed
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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

// viewport is a separate export per Next.js 14+ spec
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06599B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Preconnect so font requests start immediately on parse */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-[#E8F4FD] text-[#1A1A1A] selection:bg-[#06599B]/30 selection:text-[#06599B] flex flex-col min-h-screen">
        {/* Navbar renders server-side — no layout shift */}
        <Navbar />

        {/*
         * ClientShell holds all ssr:false components (SmoothScroll, LoadingScreen,
         * MouseFollowCursor, Footer) — wrapped in a 'use client' boundary
         * so Next.js App Router allows the ssr:false dynamic imports.
         */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
