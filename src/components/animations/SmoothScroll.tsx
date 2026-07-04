"use client";

import React, { useEffect, memo } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const shouldUseNativeScroll =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (shouldUseNativeScroll) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      autoResize: true,
    });

    let rafId: number;
    // We need to keep framer-motion and lenis synced
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Ensure scroll position is reset on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="w-full min-h-full">{children}</div>;
}

export default memo(SmoothScroll);
