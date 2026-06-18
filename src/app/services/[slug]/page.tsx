import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceIcon } from "@/lib/data";
import { ArrowLeft, CheckCircle } from "lucide-react";
import {
  TextReveal,
  StaggerContainer,
  StaggerItem,
  FadeIn,
  FloatingElement,
  ParallaxLayer,
  HoverCard,
  RippleButton,
} from "@/components/animations/AnimationUtils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = getServiceIcon(service.iconName);

  return (
    <div className="relative overflow-hidden">
      {/* ── HEADER & NAVIGATION ───────────────────────────── */}
      <section className="relative pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        {/* Parallax Background */}
        <ParallaxLayer speed={-0.3} className="absolute inset-0 pointer-events-none z-0">
          <div className={`absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${service.highlightColor} opacity-[0.1] blur-3xl animate-drift`} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/[0.08] blur-3xl animate-drift-slow" />
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <FadeIn direction="left" delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors group mb-12"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" /> Back to Services
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Title & Description */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <FadeIn delay={0.2} direction="up">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${service.highlightColor} flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                  <Icon className="w-8 h-8" />
                </div>
              </FadeIn>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <TextReveal text={service.title} className="block text-white" delay={0.3} />
              </h1>

              <FadeIn delay={0.5} direction="up">
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {service.longDescription}
                </p>
              </FadeIn>
            </div>

            {/* Quick Metrics Card */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <FadeIn delay={0.6} direction="left">
                <HoverCard scale={1.02} lift={-5}>
                  <div className="rounded-3xl border border-white/[0.06] bg-zinc-950/60 backdrop-blur-xl p-8 flex flex-col gap-5 shadow-2xl animate-border-glow">
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 font-mono">Service Focus</span>
                    <div className="h-px bg-white/10 w-full" />
                    <ul className="flex flex-col gap-4 text-sm">
                      <li className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span>Tailored Deliverables</span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span>Direct Dashboard Tracking</span>
                      </li>
                      <li className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0" />
                        <span>Regular Optimization Sprints</span>
                      </li>
                    </ul>
                  </div>
                </HoverCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ───────────────────────────────────────── */}
      <section className="relative z-10 py-24 border-t border-white/[0.05] bg-[#040408]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16">
              Methodology & Roadmap
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {service.process.map((step) => (
              <StaggerItem key={step.title}>
                <HoverCard lift={-6}>
                  <div className="p-8 rounded-2xl border border-white/[0.05] bg-zinc-950/40 backdrop-blur-md flex flex-col gap-4 hover:border-white/20 transition-all duration-300 h-full group">
                    <span className="text-sm font-bold text-gradient-purple-cyan font-mono group-hover:scale-110 origin-left transition-transform duration-300">
                      {step.title.split(". ")[0]}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                      {step.title.split(". ")[1]}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CAPABILITIES & DELIVERABLES ───────────────────── */}
      <section className="relative z-10 py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Features */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <FadeIn>
              <h3 className="text-2xl font-bold text-white">Capabilities Checklist</h3>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {service.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] flex gap-3 text-sm text-zinc-300 hover:bg-white/[0.04] transition-colors duration-300 group">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan mt-1 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span>{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Deliverables */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeIn>
              <h3 className="text-2xl font-bold text-white">Key Deliverables Package</h3>
            </FadeIn>
            <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
              {service.deliverables.map((item) => (
                <StaggerItem key={item}>
                  <div className="p-5 rounded-2xl border border-white/[0.05] bg-[#050508]/60 backdrop-blur-sm text-sm text-zinc-300 font-mono flex items-center justify-between group hover:border-brand-purple/30 transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                    <CheckCircle className="w-5 h-5 text-brand-purple shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="relative z-10 py-16 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <div className="p-10 md:p-14 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-zinc-950 via-[#06060f] to-zinc-950 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl animate-border-glow">
              <div className={`absolute inset-0 bg-gradient-to-bl ${service.highlightColor} opacity-[0.05] pointer-events-none`} />
              
              <div className="flex flex-col gap-4 max-w-xl text-center md:text-left relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Ready to deploy {service.title}?
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Contact us to discuss your goals and formulate an actionable strategic schedule.
                </p>
              </div>
              
              <div className="relative z-10 w-full md:w-auto">
                <Link href="/contact">
                  <RippleButton className="btn-primary w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-xl font-semibold text-sm uppercase tracking-wide whitespace-nowrap shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    Launch Brief Session
                  </RippleButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
