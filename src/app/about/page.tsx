import React from "react";
import { Target, Eye, ArrowRight, Lightbulb, ShieldCheck, Search, Rocket, Users, Globe, Compass, Briefcase, BarChart3, TrendingUp } from "lucide-react";
import {
  TextReveal,
  FadeIn,
} from "@/components/animations/AnimationUtils";
import { contentDictionary } from "@/lib/content-dictionary";
import Link from "next/link";
import AnimatedTimeline from "@/components/animations/AnimatedTimeline";

export default function About() {
  const timelineItems = [
    {
      year: "Founded",
      title: "AN Marketing Agency Established",
      description: "AN Marketing Agency was founded as a 360° marketing agency providing fully integrated marketing solutions designed to help brands grow, scale, and compete in today's fast-moving digital landscape."
    },
    {
      year: "Growth",
      title: "Building Marketing Ecosystems",
      description: "We focused on building complete marketing ecosystems that align strategy, creativity, technology, and performance to achieve real business results for our clients."
    },
    {
      year: "Expansion",
      title: "Regional Leadership",
      description: "Became a trusted marketing partner for ambitious brands across Egypt and the region, known for strategic thinking, execution excellence, and long-term impact."
    },
    {
      year: "Present",
      title: "Driving Sustainable Growth",
      description: "Today, we continue to deliver measurable, scalable, and customized marketing solutions that align with our clients' objectives and market realities."
    }
  ];

  const missionVisionCards = [
    {
      icon: Target,
      title: "Mission",
      description: contentDictionary.about.mission.content,
    },
    {
      icon: Eye,
      title: "Vision",
      description: contentDictionary.about.vision.content,
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#FAFAFA]">
      
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#06599B] text-xs font-semibold uppercase tracking-wider mb-6">
              {contentDictionary.about.hero.sectionLabel}
            </span>
          </FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
            <TextReveal text={contentDictionary.about.hero.title} delay={0.15} />
          </h1>
          <FadeIn delay={0.3} direction="up">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6">
              {contentDictionary.about.hero.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────── */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {missionVisionCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.12} direction="up" className="h-full">
                <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                  <card.icon className="w-7 h-7 text-[#06599B]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed flex-grow">{card.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY STORY TIMELINE ───────────────────────── */}
      <section className="relative z-10 py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">Company Story</h2>
            </div>
          </FadeIn>
          <AnimatedTimeline items={timelineItems} />
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">What We Believe</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">{contentDictionary.about.values.title}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contentDictionary.about.values.values.map((value, index) => {
              const ValueIcons = [Lightbulb, ShieldCheck, Search, Rocket, Users];
              const Icon = ValueIcons[index % ValueIcons.length];
              
              return (
                <FadeIn key={value.title} delay={index * 0.08} direction="up" className="h-full">
                  <div className="bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-[#06599B] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ───────────────────────────────── */}
      <section className="relative z-10 py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">{contentDictionary.about.differentiators.title}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {contentDictionary.about.differentiators.items.map((item, index) => {
              const DiffIcons = [Globe, Compass, Briefcase, BarChart3, TrendingUp];
              const Icon = DiffIcons[index % DiffIcons.length];

              return (
                <FadeIn key={item.title} delay={index * 0.08} direction="up" className="h-full">
                  <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col h-full group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#06599B] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#06599B] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────── */}
      <section className="relative z-10 py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <div className="flex flex-col gap-8 items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {contentDictionary.about.cta.title}
              </h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                {contentDictionary.about.cta.description}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
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
