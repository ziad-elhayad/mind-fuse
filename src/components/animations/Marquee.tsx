"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 30,
  direction = "left",
  className = "",
  separator = "•",
}: MarqueeProps) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400 shrink-0">
              {item}
            </span>
            <span className="text-brand-primary/60 shrink-0">{separator}</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
