import React from "react";
import Link from "next/link";
import { SERVICES, getServiceIcon } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import {
  TextReveal,
  FadeIn,
  FloatingElement,
  ParallaxLayer,
  HoverCard,
  RippleButton,
} from "@/components/animations/AnimationUtils";
import { contentDictionary } from "@/lib/content-dictionary";

export default function Services() {
  return (
    <div className="relative overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-32 pb-14 md:pb-16 min-h-[55vh] flex items-center">
        <ParallaxLayer speed={-0.3} className="absolute inset-0 pointer-events-none z-0">
          <div className="ambient-glow-1 top-1/3 -left-24 animate-drift" />
          <div className="ambient-glow-2 bottom-0 right-0 animate-drift-slow" />
        </ParallaxLayer>

        <FloatingElement amplitude={14} duration={5} className="absolute top-40 right-24 w-3 h-3 rounded-full bg-[#06599B]/60 hidden lg:block"><span /></FloatingElement>
        <FloatingElement amplitude={10} duration={6} delay={1} className="absolute bottom-20 left-32 w-2 h-2 rounded-full bg-[#2D7FC0]/50 hidden lg:block"><span /></FloatingElement>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <FadeIn direction="left" delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">{contentDictionary.services.hero.sectionLabel}</span>
            </FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <TextReveal text={contentDictionary.services.hero.headline.line1} className="block text-[#06599B]" delay={0.15} />
              <TextReveal text={contentDictionary.services.hero.headline.line2} className="text-[#06599B]" delay={0.45} />
            </h1>
            <FadeIn delay={0.65} direction="up">
              <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed">
                {contentDictionary.services.hero.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────── */}
      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col gap-8 md:gap-10">
          {SERVICES.map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <FadeIn key={service.id} delay={idx * 0.08} direction="up">
                <HoverCard scale={1.01} lift={-6}>
                  <div className="group relative rounded-3xl border border-[#06599B]/15 bg-white/90 backdrop-blur-md overflow-hidden hover:border-[#06599B]/30 transition-all duration-500 p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 shimmer-card">
                    {/* Accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.highlightColor} rounded-r-full`} />
                    {/* Hover glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-bl ${service.highlightColor} opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-700 pointer-events-none`} />

                    {/* Left: Icon + description */}
                    <div className="flex-1 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#06599B] flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                          {Icon && <Icon className="w-6 h-6" />}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#06599B] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#06599B] group-hover:to-[#2D7FC0] transition-all duration-300">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-[#6B7280] text-base leading-relaxed">{service.longDescription}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-sm text-[#6B7280]"
                          >
                            <Check className="w-4 h-4 text-[#06599B] mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Deliverables + CTA */}
                    <div className="lg:w-[340px] w-full shrink-0 border-t lg:border-t-0 lg:border-l border-[#06599B]/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between gap-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">{contentDictionary.services.deliverablesLabel}</h3>
                        <ul className="flex flex-col gap-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-[#6B7280] font-mono flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2D7FC0] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href={`/services/${service.slug}`}>
                        <RippleButton className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white/60 border border-[#06599B]/20 hover:border-[#06599B]/40 text-[#1A1A1A] rounded-xl font-semibold transition-all group/btn text-sm">
                          Process & Outcomes
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </RippleButton>
                      </Link>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative z-10 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <FadeIn direction="up">
            <div className="p-7 sm:p-10 md:p-14 rounded-3xl border border-[#06599B]/15 bg-gradient-to-br from-[#06599B] to-[#044A80] backdrop-blur-md text-center flex flex-col gap-6 items-center animate-border-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D7FC0]/10 to-[#06599B]/10 pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10">{contentDictionary.services.cta.title}</h2>
              <p className="text-white/80 text-sm max-w-lg leading-relaxed relative z-10">
                {contentDictionary.services.cta.description}
              </p>
              <Link href="/contact" className="relative z-10">
                <RippleButton className="btn-primary px-8 py-4 bg-white text-[#06599B] hover:bg-[#F5F7FA] rounded-xl font-semibold text-sm uppercase tracking-wide">
                  {contentDictionary.services.cta.button}
                </RippleButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

