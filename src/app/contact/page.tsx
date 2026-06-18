"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
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
import { contentDictionary } from "@/lib/content-dictionary";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    selectedServices: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const selected = prev.selectedServices.includes(serviceTitle)
        ? prev.selectedServices.filter((s) => s !== serviceTitle)
        : [...prev.selectedServices, serviceTitle];
      return { ...prev, selectedServices: selected };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(contentDictionary.contact.validation.requiredFields);
      return;
    }

    setIsSubmitting(true);
    // Simulate API pipeline delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      {/* ── BACKGROUND ────────────────────────────────────── */}
      <ParallaxLayer speed={-0.3} className="absolute inset-0 pointer-events-none z-0">
        <div className="ambient-glow-1 top-48 left-1/4 animate-drift" />
        <div className="ambient-glow-2 bottom-0 right-0 animate-drift-slow" />
      </ParallaxLayer>

      <FloatingElement amplitude={15} duration={5.5} className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-[#06599B]/60 hidden lg:block"><span /></FloatingElement>

      {/* ── MAIN GRID ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: INFO ─────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <FadeIn direction="left" delay={0.1}>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#06599B]">
                  Get In Touch
                </span>
              </FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <TextReveal text="Let's construct" className="block text-[#06599B]" delay={0.2} />
                <TextReveal text="your project." className="block text-gradient-primary-secondary" delay={0.4} />
              </h1>
              <FadeIn delay={0.6} direction="up">
                <p className="text-[#6B7280] text-base leading-relaxed max-w-sm">
                  Discuss campaign architectures, identity visual structures, SEO priorities, or custom React frameworks with our specialists.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="flex flex-col gap-6 pt-4 border-t border-[#06599B]/10" staggerDelay={0.15} initialDelay={0.7}>
              {contentDictionary.contact.contactInfo.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/60 border border-[#06599B]/15 flex items-center justify-center text-[#2D7FC0] shrink-0 group-hover:border-[#2D7FC0]/40 group-hover:bg-[#2D7FC0]/10 transition-all duration-300">
                      {item.icon === "Mail" && <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
                      {item.icon === "Phone" && <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
                      {item.icon === "MapPin" && <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <h4 className="text-[#6B7280] text-[10px] font-semibold uppercase tracking-widest">{item.label}</h4>
                      {item.href === "#" ? (
                        <p className="text-[#1A1A1A] text-sm font-medium">{item.value}</p>
                      ) : (
                        <a href={item.href} className="text-[#1A1A1A] text-sm font-medium hover:text-[#06599B] transition-colors duration-300">
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Stylized Map Mockup */}
            <FadeIn delay={1.1} direction="up">
              <div className="relative w-full aspect-video rounded-3xl border border-[#06599B]/15 bg-white/90 backdrop-blur-sm p-4 overflow-hidden hidden md:block group">
                <div className="absolute inset-0 opacity-[0.08] grid-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#06599B]/5 to-transparent pointer-events-none" />
                
                {/* SVG Map */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                  <svg className="w-full h-full text-zinc-700" viewBox="0 0 100 50" fill="currentColor">
                    <circle cx="20" cy="15" r="2.5" />
                    <circle cx="25" cy="18" r="3.5" />
                    <circle cx="50" cy="15" r="3" />
                    <circle cx="62" cy="22" r="2.5" />
                    <circle cx="75" cy="20" r="4" />
                    <circle cx="82" cy="25" r="2.5" />
                    <circle cx="85" cy="40" r="3" />
                  </svg>
                </div>

                {/* Glowing Pins */}
                <FloatingElement amplitude={4} duration={3} className="absolute left-[24%] top-[34%] flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-[#06599B] absolute animate-ping opacity-60" />
                  <span className="w-2 h-2 rounded-full bg-[#2D7FC0]" />
                </FloatingElement>
                <FloatingElement amplitude={4} duration={3.5} delay={1} className="absolute left-[49%] top-[28%] flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-[#06599B] absolute animate-ping opacity-60" />
                  <span className="w-2 h-2 rounded-full bg-[#2D7FC0]" />
                </FloatingElement>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT COLUMN: FORM ────────────────────────── */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} direction="up" className="h-full">
              <div className="rounded-3xl border border-[#06599B]/15 bg-white/90 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden shadow-2xl h-full animate-border-glow">
                
                {/* Decorative BG */}
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#2D7FC0]/10 blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-8 relative z-10"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2.5">
                          <label className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{contentDictionary.contact.form.nameLabel}</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={contentDictionary.contact.form.namePlaceholder}
                            className="bg-white/60 border border-[#06599B]/20 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#06599B]/60 focus:bg-white/80 transition-all duration-300 placeholder:text-[#6B7280]"
                          />
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <label className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{contentDictionary.contact.form.emailLabel}</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder={contentDictionary.contact.form.emailPlaceholder}
                            className="bg-white/60 border border-[#06599B]/20 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#06599B]/60 focus:bg-white/80 transition-all duration-300 placeholder:text-[#6B7280]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{contentDictionary.contact.form.companyLabel}</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={contentDictionary.contact.form.companyPlaceholder}
                          className="bg-white/60 border border-[#06599B]/20 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#06599B]/60 focus:bg-white/80 transition-all duration-300 placeholder:text-[#6B7280]"
                        />
                      </div>

                      {/* Capabilities Selector */}
                      <div className="flex flex-col gap-4">
                        <label className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{contentDictionary.contact.form.capabilitiesLabel}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SERVICES.map((serv) => (
                            <button
                              key={serv.id}
                              type="button"
                              onClick={() => toggleService(serv.title)}
                              className={`flex items-center gap-3 p-4 rounded-xl border text-[11px] font-bold uppercase tracking-wider text-left transition-all duration-300 ${
                                formData.selectedServices.includes(serv.title)
                                  ? "bg-[#06599B]/10 border-[#06599B] text-[#1A1A1A] shadow-[0_0_15px_rgba(6,89,155,0.15)]"
                                  : "bg-white/60 border-[#06599B]/15 text-[#6B7280] hover:border-[#06599B]/30 hover:text-[#1A1A1A] hover:bg-white/80"
                              }`}
                            >
                              <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                formData.selectedServices.includes(serv.title)
                                  ? "border-[#06599B] bg-[#06599B] text-white"
                                  : "border-[#06599B]/30 bg-transparent"
                              }`}>
                                {formData.selectedServices.includes(serv.title) && (
                                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                    <CheckCircle2 className="w-3 h-3" />
                                  </motion.div>
                                )}
                              </span>
                              {serv.title}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        <label className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{contentDictionary.contact.form.messageLabel}</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={contentDictionary.contact.form.messagePlaceholder}
                          className="bg-white/60 border border-[#06599B]/20 rounded-xl px-5 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#06599B]/60 focus:bg-white/80 transition-all duration-300 placeholder:text-[#6B7280] resize-none"
                        />
                      </div>

                      <RippleButton
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full py-5 rounded-xl bg-gradient-to-r from-[#06599B] to-[#2D7FC0] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {contentDictionary.contact.form.submittingText}
                          </>
                        ) : (
                          <>
                            {contentDictionary.contact.form.submitButton} <Send className="w-4 h-4" />
                          </>
                        )}
                      </RippleButton>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-20 gap-8 h-full relative z-10"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-[#2D7FC0]/10 border border-[#2D7FC0] flex items-center justify-center text-[#2D7FC0] shadow-[0_0_30px_rgba(45,127,192,0.3)] relative"
                      >
                        <div className="absolute inset-0 rounded-full border border-[#2D7FC0] animate-ping opacity-50" />
                        <CheckCircle2 className="w-10 h-10" />
                      </motion.div>
                      
                      <div className="flex flex-col gap-3">
                        <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">{contentDictionary.contact.success.title}</h2>
                        <p className="text-[#6B7280] text-sm max-w-sm leading-relaxed mx-auto">
                          {contentDictionary.contact.success.description}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({ name: "", email: "", company: "", message: "", selectedServices: [] });
                        }}
                        className="mt-4 px-6 py-3 rounded-full border border-[#06599B]/20 hover:border-[#06599B]/40 hover:bg-white/60 text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 group"
                      >
                        {contentDictionary.contact.success.resetButton} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
