"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";

interface MouseFollowProps {
  children?: React.ReactNode;
}

export default function MouseFollowCursor({ children }: MouseFollowProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const trailSpringConfig = { damping: 40, stiffness: 120 };
  const trailXSpring = useSpring(trailX, trailSpringConfig);
  const trailYSpring = useSpring(trailY, trailSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      trailX.set(e.clientX - 16);
      trailY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-3 h-3 rounded-full bg-brand-secondary mix-blend-difference hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      {/* Larger trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-brand-primary/60 hidden md:block"
        style={{ x: trailXSpring, y: trailYSpring }}
      />
      {children}
    </>
  );
}
