"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import {
  motion,
  useInView,
  animate,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

// ─── Shared easing ───────────────────────────────────────────────────
const EASE_OUT_CUBIC: [number, number, number, number] = [0.33, 1, 0.68, 1];

// ─── Animated Counter ───────────────────────────────────────────────
interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

function AnimatedCounterBase({
  from = 0,
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
export const AnimatedCounter = memo(AnimatedCounterBase);

// ─── Text Reveal Animation ───────────────────────────────────────────
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

function TextRevealBase({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: EASE_OUT_CUBIC,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
export const TextReveal = memo(TextRevealBase);

// ─── Stagger Container ───────────────────────────────────────────────

// Variants defined outside component — never recreated on re-render
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.initialDelay,
    },
  }),
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_CUBIC },
  },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

function StaggerContainerBase({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainerVariants}
      custom={{ staggerDelay, initialDelay }}
    >
      {children}
    </motion.div>
  );
}
export const StaggerContainer = memo(StaggerContainerBase);

function StaggerItemBase({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}
export const StaggerItem = memo(StaggerItemBase);

// ─── Parallax Section ────────────────────────────────────────────────
interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

function ParallaxLayerBase({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 80}px`, `${speed * 80}px`]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
export const ParallaxLayer = memo(ParallaxLayerBase);

// ─── Fade In On Scroll ───────────────────────────────────────────────

// Variant factories — cached per unique direction+distance combo
const fadeVariantCache = new Map<string, Variants>();

function getFadeVariants(direction: string, distance: number): Variants {
  const key = `${direction}-${distance}`;
  if (fadeVariantCache.has(key)) return fadeVariantCache.get(key)!;

  const dirMap: Record<string, { x: number; y: number }> = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = {
    hidden: { opacity: 0, ...dirMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT_CUBIC },
    },
  };

  fadeVariantCache.set(key, variants);
  return variants;
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

function FadeInBase({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}: FadeInProps) {
  const variants = getFadeVariants(direction, distance);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_CUBIC }}
    >
      {children}
    </motion.div>
  );
}
export const FadeIn = memo(FadeInBase);

// ─── Floating Element ────────────────────────────────────────────────
interface FloatingProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
  delay?: number;
}

// Floating animation values are computed outside to avoid object recreation
function getFloatingAnimation(amplitude: number) {
  return { y: [0, -amplitude, 0] as [number, number, number] };
}

function FloatingElementBase({
  children,
  amplitude = 12,
  duration = 4,
  className = "",
  delay = 0,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={getFloatingAnimation(amplitude)}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
export const FloatingElement = memo(FloatingElementBase);

// ─── Scale on Hover Card ─────────────────────────────────────────────
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}

function HoverCardBase({
  children,
  className = "",
  scale = 1.03,
  lift = -8,
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, y: lift, transition: { duration: 0.3, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
export const HoverCard = memo(HoverCardBase);

// ─── Page Transition Wrapper ─────────────────────────────────────────
const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      transition={{ duration: 0.5, ease: EASE_OUT_CUBIC }}
    >
      {children}
    </motion.div>
  );
}

// ─── Ripple Button ───────────────────────────────────────────────────
interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function RippleButtonBase({
  children,
  className = "",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      700
    );
    onClick?.(e);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{ left: r.x - 8, top: r.y - 8, width: 16, height: 16 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 12, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
      {children}
    </button>
  );
}
export const RippleButton = memo(RippleButtonBase);

// ─── Section Divider Scroll Animation ────────────────────────────────
const scrollRevealVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
} satisfies Variants;

export function ScrollRevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollRevealVariants}
    >
      {children}
    </motion.section>
  );
}
