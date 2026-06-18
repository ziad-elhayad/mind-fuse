"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, CheckCircle, ArrowRight, Quote } from "lucide-react";
import {
  TextReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
  FloatingElement,
  ParallaxLayer,
  HoverCard,
} from "@/components/animations/AnimationUtils";
import { contentDictionary } from "@/lib/content-dictionary";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20">
        <ParallaxLayer speed={-0.4} className="absolute inset-0 pointer-events-none z-0">
          <div className="ambient-glow-1 top-1/4 -left-32 animate-drift" />
          <div className="ambient-glow-2 bottom-0 right-0 animate-drift-slow" />
        </ParallaxLayer>

        <FloatingElement amplitude={16} duration={6} className="absolute top-40 right-20 w-3 h-3 rounded-full bg-[#2D7FC0]/50 hidden lg:block"><span /></FloatingElement>
        <FloatingElement amplitude={10} duration={4} delay={1.5} className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-[#06599B]/60 hidden lg:block"><span /></FloatingElement>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn direction="left" delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">{contentDictionary.about.hero.sectionLabel}</span>
          </FadeIn>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mt-4">
            <TextReveal text={contentDictionary.about.hero.title} className="block text-[#1A1A1A]" delay={0.15} />
          </h1>
          <FadeIn delay={0.65} direction="up">
            <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed max-w-3xl mt-6">
              {contentDictionary.about.hero.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">{contentDictionary.about.mission.title}</h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-4xl">{contentDictionary.about.mission.content}</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── VISION ────────────────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">{contentDictionary.about.vision.title}</h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-4xl">{contentDictionary.about.vision.content}</p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8">{contentDictionary.about.values.title}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentDictionary.about.values.values.map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={index * 0.1}>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{value.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIFFERENTIATORS ───────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8">{contentDictionary.about.differentiators.title}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentDictionary.about.differentiators.items.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={index * 0.1}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#06599B]" />
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed pl-7">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── APPROACH ──────────────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8">{contentDictionary.about.approach.title}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentDictionary.about.approach.steps.map((step, index) => (
              <FadeIn key={step.step} direction="up" delay={index * 0.1}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#06599B] to-[#2D7FC0] flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{step.step}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed pl-10">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── CEO QUOTE ──────────────────────────────────────── */}
      <div className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <div className="glass-card rounded-3xl p-12 text-center">
              <Quote className="w-12 h-12 text-[#06599B] mx-auto mb-6" />
              <blockquote className="text-[#1A1A1A] text-xl md:text-2xl leading-relaxed italic mb-8">
                "{contentDictionary.about.ceoQuote.quote}"
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-bold text-[#1A1A1A]">{contentDictionary.about.ceoQuote.name}</p>
                <p className="text-[#6B7280] text-sm">{contentDictionary.about.ceoQuote.role}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── CTA SECTION ───────────────────────────────────── */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-[#06599B] to-[#2D7FC0]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{contentDictionary.about.cta.title}</h2>
              <p className="text-white/90 text-lg leading-relaxed">{contentDictionary.about.cta.description}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#06599B] rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-[#F5F7FA] transition-colors w-fit mx-auto">
                {contentDictionary.about.cta.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
