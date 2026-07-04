"use client";

import dynamic from "next/dynamic";

// These are all client-only components (require browser APIs).
// They must be dynamically imported with ssr:false inside a Client Component.
const MouseFollowCursor = dynamic(
  () => import("@/components/animations/MouseFollowCursor"),
  { ssr: false }
);

const LoadingScreen = dynamic(
  () => import("@/components/animations/LoadingScreen"),
  { ssr: false, loading: () => null }
);

const SmoothScroll = dynamic(
  () => import("@/components/animations/SmoothScroll"),
  { ssr: false }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
  loading: () => <div className="h-64" aria-hidden="true" />,
});

/**
 * ClientShell wraps all browser-only layout components.
 * Being a Client Component allows us to use ssr:false dynamic imports here.
 */
export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      {/* Loading screen — client splash, unmounts after ~1.4s */}
      <LoadingScreen />

      {/* Custom cursor — desktop only (hidden on mobile via CSS) */}
      <MouseFollowCursor />

      {/* Subtle global grid overlay */}
      <div
        className="fixed inset-0 grid-overlay opacity-[0.35] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Ambient background glows — GPU-composited via will-change */}
      <div
        className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-[#06599B]/[0.06] blur-3xl pointer-events-none z-0 animate-drift will-change-transform"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[#2D7FC0]/[0.05] blur-3xl pointer-events-none z-0 animate-drift-slow will-change-transform"
        aria-hidden="true"
      />

      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
