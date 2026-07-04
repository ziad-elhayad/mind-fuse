"use client";

import React, { useRef, useState, useCallback, memo, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contentDictionary } from "@/lib/content-dictionary";
import { getServiceIcon } from "@/lib/data";

const SPRING_CONFIG = { damping: 20, stiffness: 300 };

interface ServiceCard3DProps {
  service: {
    id: string;
    title: string;
    shortDescription: string;
    slug: string;
    iconName: string;
  };
  index: number;
}


function ServiceCard3D({ service, index }: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Derive initial mobile state synchronously to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion || isMobile;

  // Pure Framer Motion for 3D interactions (GPU accelerated, no GSAP jank)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), SPRING_CONFIG);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), SPRING_CONFIG);
  
  // Exaggerated rotation for the icon inner element to create depth
  const iconRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), SPRING_CONFIG);
  const iconRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [shouldReduceMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: shouldReduceMotion ? "flat" : "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Smooth fade, scale, and slide up
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for premium feel
      }}
      className="will-change-transform"
    >
      <div className="glass-card shimmer-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06599B]/5 to-[#2D7FC0]/5 pointer-events-none" />

        <div className="flex-1 flex flex-col gap-4 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#06599B]">
            {service.title}
          </h3>
          <p className="text-[#6B7280] text-base leading-relaxed">
            {service.shortDescription}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="text-sm font-semibold uppercase tracking-wider text-[#06599B] hover:text-[#2D7FC0] transition-colors flex items-center gap-2 group/link w-fit mt-2"
          >
            {contentDictionary.home.services.exploreButton}{" "}
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#06599B] to-[#2D7FC0] flex items-center justify-center text-white shadow-xl shrink-0 relative z-10 will-change-transform"
          style={{ 
            rotateX: shouldReduceMotion ? 0 : iconRotateX,
            rotateY: shouldReduceMotion ? 0 : iconRotateY,
            transformStyle: shouldReduceMotion ? "flat" : "preserve-3d" 
          }}
        >
          {React.createElement(getServiceIcon(service.iconName), {
            className: "w-12 h-12 md:w-16 md:h-16",
          })}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl pointer-events-none" />
          <div className="absolute -inset-1 bg-gradient-to-br from-[#06599B]/30 to-[#2D7FC0]/30 rounded-2xl blur-lg -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default memo(ServiceCard3D);
