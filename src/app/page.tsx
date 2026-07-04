import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, PARTNERS } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import {
  TextReveal,
  FadeIn,
  FloatingElement,
  ParallaxLayer,
  RippleButton,
} from "@/components/animations/AnimationUtils";
import { contentDictionary } from "@/lib/content-dictionary";
import Services3DBackground from "@/components/3d/Services3DBackground";
import ServiceCard3D from "@/components/3d/ServiceCard3D";

function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] pt-20 md:pt-0 flex items-center justify-center overflow-hidden">
        {/* Optimized Static Hero Image Background */}
        <Image
          src="/hero_background.webp"
          alt="MindFuse Premium Background"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/35 to-white/40 z-0" />

        {/* Parallax bg glow layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#06599B]/15 via-[#2D7FC0]/10 to-transparent blur-3xl animate-drift will-change-transform" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06599B]/10 blur-3xl animate-drift-slow will-change-transform" />
        </div>

        {/* Floating decorative orbs */}
        <FloatingElement amplitude={18} duration={6} delay={0} className="absolute top-32 left-16 w-3 h-3 rounded-full bg-[#06599B]/60 hidden lg:block will-change-transform"><span /></FloatingElement>
        <FloatingElement amplitude={12} duration={4.5} delay={1} className="absolute top-48 right-24 w-2 h-2 rounded-full bg-[#2D7FC0]/60 hidden lg:block will-change-transform"><span /></FloatingElement>
        <FloatingElement amplitude={20} duration={7} delay={0.5} className="absolute bottom-40 left-1/4 w-4 h-4 rounded-full bg-[#06599B]/40 hidden lg:block will-change-transform"><span /></FloatingElement>
        <FloatingElement amplitude={14} duration={5} delay={2} className="absolute bottom-32 right-1/3 w-2 h-2 rounded-full bg-[#2D7FC0]/50 hidden lg:block will-change-transform"><span /></FloatingElement>

        {/* Slow-spinning ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#06599B]/10 animate-spin-slow pointer-events-none hidden lg:block will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-[#2D7FC0]/8 animate-spin-slow pointer-events-none hidden lg:block will-change-transform" style={{ animationDirection: "reverse", animationDuration: "90s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-16 md:pt-32 pb-20 md:pb-24 grid grid-cols-1 gap-12 items-center w-full">

          <div className="flex flex-col gap-8">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#06599B]/20 w-fit animate-border-glow">
                <span className="w-2 h-2 rounded-full bg-[#2D7FC0] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                  {contentDictionary.home.hero.badge}
                </span>
                <Sparkles className="w-3 h-3 text-[#06599B]" />
              </div>
            </FadeIn>

            {/* Main headline with text reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl">
              <TextReveal text={contentDictionary.home.hero.headline.line1} className="block text-[#06599B]" delay={0.15} />
            </h1>

            <FadeIn delay={0.6} direction="up">
              <p className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed max-w-xl font-semibold">
                {contentDictionary.home.hero.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.75} direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="https://canva.link/dft1n3k9u8b93fo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 bg-white/80 border border-[#06599B]/20 hover:border-[#06599B]/40 text-[#1A1A1A] rounded-xl font-semibold transition-all duration-300 text-sm uppercase tracking-wide"
                >
                  {contentDictionary.home.hero.secondaryButton}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
                <Link href="/contact">
                  <RippleButton className="btn-primary px-8 py-4 bg-gradient-to-r from-[#06599B] to-[#2D7FC0] text-white rounded-xl font-semibold shadow-[0_0_30px_rgba(6,89,155,0.25)] text-sm uppercase tracking-wide">
                    {contentDictionary.home.hero.primaryButton}
                  </RippleButton>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={1.2} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-[#1A1A1A] uppercase tracking-widest font-mono font-semibold">{contentDictionary.home.hero.scrollIndicator}</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#06599B] to-transparent animate-pulse" />
        </FadeIn>
      </section>

      {/* ── ABOUT US ─────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 bg-[#E8F4FD] content-visibility-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#06599B]">
                  {contentDictionary.home.aboutUs.sectionTitle}
                </h2>
                <p className="text-[#6B7280] text-base leading-relaxed">
                  {contentDictionary.home.aboutUs.content}
                </p>
                <p className="text-[#1A1A1A] text-base leading-relaxed font-medium">
                  {contentDictionary.home.aboutUs.keyMessage}
                </p>
                <Link href="/services">
                  <RippleButton className="btn-primary px-8 py-4 bg-gradient-to-r from-[#06599B] to-[#2D7FC0] text-white rounded-xl font-semibold text-sm uppercase tracking-wide w-fit">
                    {contentDictionary.home.aboutUs.ctaButton}
                  </RippleButton>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(6,89,155,0.15)] group">
                <Image
                  src="/about_us.jpg"
                  alt="AN Marketing Agency - Premium Concierge Service"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none z-10 mix-blend-overlay" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#06599B]/10 pointer-events-none z-20" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section className="relative z-10 py-24 content-visibility-auto overflow-hidden">
        {/* 3D Background */}
        <Services3DBackground className="opacity-40" />
        
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <div className="ambient-glow-2 top-1/2 -right-64" />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col gap-4">
              <FadeIn direction="left">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">{contentDictionary.home.services.sectionLabel}</span>
              </FadeIn>
              <FadeIn delay={0.1} direction="up">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#06599B]">
                  {contentDictionary.home.services.sectionTitle}
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="right">
              <p className="text-[#6B7280] text-sm md:text-base max-w-md">
                {contentDictionary.home.services.sectionDescription}
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard3D
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC TECHNOLOGY PARTNER ───────────────────── */}
      <section className="relative z-10 py-20 md:py-28 content-visibility-auto contain-layout">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <FadeIn direction="up">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#06599B]">{contentDictionary.partner.sectionLabel}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#06599B]">{contentDictionary.partner.sectionTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6B7280] text-lg md:text-xl">{contentDictionary.partner.sectionDescription}</p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8">
            {PARTNERS.map((partner, index) => (
              <FadeIn key={partner.id} delay={index * 0.1} direction="up">
                <div
                  className="group relative rounded-3xl border border-[#06599B]/15 bg-white/90 backdrop-blur-md overflow-hidden hover:border-[#06599B]/30 hover:scale-[1.01] transition-all duration-500 p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 shimmer-card"
                  style={{ contain: 'layout style paint' }}
                >
                  {/* Accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${partner.highlightColor} rounded-r-full`} />
                  {/* Hover glow */}
                  <div className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl ${partner.highlightColor} opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-700 pointer-events-none`} />

                  {/* Logo */}
                  <div className="relative w-full md:w-48 h-32 flex items-center justify-center bg-white rounded-2xl border border-[#06599B]/10 group-hover:border-[#06599B]/20 transition-colors shrink-0">
                    <Image
                      src={partner.logo.replace('.jpeg', '.webp').replace('.jpg', '.webp')}
                      alt={partner.name}
                      width={192}
                      height={80}
                      className="h-20 w-auto object-contain"
                      loading="lazy"
                      sizes="192px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-4 min-w-0 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#06599B] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#06599B] group-hover:to-[#2D7FC0] transition-all duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">{partner.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#06599B] to-[#2D7FC0] hover:from-[#0A6AB8] hover:to-[#06599B] transition-all duration-300 shadow-lg hover:shadow-xl shrink-0"
                  >
                    {contentDictionary.partner.visitButton}
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AN MARKETING AGENCY ───────────────────────── */}
      <section className="relative z-10 py-20 md:py-28 content-visibility-auto contain-layout">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#06599B]">{contentDictionary.home.whyUs.sectionTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#6B7280] text-lg md:text-xl">{contentDictionary.home.whyUs.subtitle}</p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {contentDictionary.home.whyUs.points.slice(0, 3).map((point, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                  <div className="p-6 rounded-2xl border border-[#06599B]/15 bg-white/90 backdrop-blur-md hover:border-[#06599B]/30 transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#06599B] to-[#2D7FC0] mt-2 shrink-0" />
                      <p className="text-[#1A1A1A] font-medium">{point}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {contentDictionary.home.whyUs.points.slice(3).map((point, index) => (
                <FadeIn key={index + 3} delay={(index + 3) * 0.1} direction="up">
                  <div className="p-6 rounded-2xl border border-[#06599B]/15 bg-white/90 backdrop-blur-md hover:border-[#06599B]/30 transition-all duration-300 group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#06599B] to-[#2D7FC0] mt-2 shrink-0" />
                      <p className="text-[#1A1A1A] font-medium">{point}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="relative z-10 py-12 pb-24 content-visibility-auto contain-layout">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <div className="relative p-8 sm:p-10 md:p-16 rounded-3xl border border-[#06599B]/15 bg-gradient-to-br from-[#06599B] via-[#044A80] to-[#06599B] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 animate-border-glow">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2D7FC0]/20 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <div className="flex flex-col gap-4 max-w-xl text-center md:text-left relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {contentDictionary.home.bottomCta.title}
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  {contentDictionary.home.bottomCta.description}
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <Link href="/contact">
                  <RippleButton className="btn-primary w-full sm:w-auto px-8 py-4 bg-white text-[#06599B] hover:bg-[#F5F7FA] rounded-xl font-semibold text-sm uppercase tracking-wide whitespace-nowrap">
                    {contentDictionary.home.bottomCta.primaryButton}
                  </RippleButton>
                </Link>
                <Link href="/services" className="w-full sm:w-auto text-center px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-xl font-semibold transition-all text-sm uppercase tracking-wide whitespace-nowrap">
                  {contentDictionary.home.bottomCta.secondaryButton}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default memo(Home);
