"use client";

import React, { useEffect, useCallback, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Spring configs defined outside component — never recreated
const PRIMARY_SPRING = { damping: 25, stiffness: 200 };
const TRAIL_SPRING = { damping: 40, stiffness: 120 };

function MouseFollowCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, PRIMARY_SPRING);
  const cursorYSpring = useSpring(cursorY, PRIMARY_SPRING);

  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const trailXSpring = useSpring(trailX, TRAIL_SPRING);
  const trailYSpring = useSpring(trailY, TRAIL_SPRING);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      trailX.set(e.clientX - 16);
      trailY.set(e.clientY - 16);
    },
    [cursorX, cursorY, trailX, trailY]
  );

  useEffect(() => {
    // passive: true — never blocks scrolling, free perf win
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      {/* Small dot cursor — hidden on mobile via CSS */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-3 h-3 rounded-full bg-[#2D7FC0] mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        aria-hidden="true"
      />
      {/* Larger trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-[#06599B]/60 hidden md:block"
        style={{ x: trailXSpring, y: trailYSpring }}
        aria-hidden="true"
      />
    </>
  );
}

export default memo(MouseFollowCursor);
