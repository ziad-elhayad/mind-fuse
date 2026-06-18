"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: string; // Tailwind class for glow e.g., 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverGlow = "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div
        className={`glass-card p-8 rounded-2xl h-full flex flex-col justify-between transition-all duration-500 overflow-hidden group-hover:-translate-y-2 ${hoverGlow} ${className}`}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
