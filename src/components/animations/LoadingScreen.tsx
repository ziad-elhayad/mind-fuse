"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contentDictionary } from "@/lib/content-dictionary";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 18;
      });
    }, 80);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#06599B] flex flex-col items-center justify-center gap-10"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-64 h-24 flex items-center justify-center relative">
              <img src="/mindFuseLogo.png" alt={contentDictionary.navigation.logoAlt} className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#06599B] to-[#2D7FC0] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Subtle label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500"
          >
            {contentDictionary.common.loading.initialising}
          </motion.span>

          {/* Ambient glow */}
          <div className="absolute w-64 h-64 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
