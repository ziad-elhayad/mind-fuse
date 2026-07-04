"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { contentDictionary } from "@/lib/content-dictionary";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isScrolledRef = useRef(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextIsScrolled = latest > 20;
    if (nextIsScrolled !== isScrolledRef.current) {
      isScrolledRef.current = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    }
  });


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-[100] h-20 bg-[#06599B]/95 backdrop-blur-md border-b border-[#06599B]/20 transition-all duration-500 md:h-auto ${
        isOpen
          ? "md:py-4"
          : isScrolled || pathname !== "/"
          ? "md:py-4"
          : "md:py-6 md:bg-transparent md:border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 flex justify-between items-center md:h-auto">
        {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-[110] min-w-0">
            <div className="relative w-36 sm:w-40 md:w-52 h-12 md:h-14 flex items-center group-hover:scale-105 transition-transform duration-300 bg-transparent">
              <Image 
                src="/mindFuseLogo.webp" 
                alt={contentDictionary.navigation.logoAlt} 
                width={208}
                height={56}
                className="w-full h-full object-contain object-left"
                priority
                sizes="(max-width: 768px) 160px, 208px"
              />
            </div>
          </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {contentDictionary.navigation.links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-base font-semibold tracking-wide text-white hover:text-[#E8F4FD] transition-colors duration-300"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8F4FD] to-[#2D7FC0] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-white/20 border border-white/30 hover:bg-white/30 hover:border-white/50 overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {contentDictionary.navigation.ctaButton} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/30 to-white/20 transition-transform duration-500 ease-out" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden relative z-[110] flex h-11 w-11 items-center justify-center rounded-lg text-white hover:text-[#E8F4FD] bg-white/20 border border-white/30 hover:border-white/50 transition-colors"
          aria-label={contentDictionary.common.accessibility.toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 bottom-0 z-[90] bg-[#06599B]/98 backdrop-blur-xl border-t border-white/10 shadow-2xl flex flex-col md:hidden px-5 sm:px-8 py-8 overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-2 text-xl font-bold tracking-tight">
              {contentDictionary.navigation.links.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block min-h-12 rounded-xl px-2 py-3 ${
                        isActive
                          ? "text-[#E8F4FD]"
                          : "text-white hover:text-[#E8F4FD]"
                      } transition-colors text-xl sm:text-2xl font-bold`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4"
            >
              <p className="text-white/80 text-sm">{contentDictionary.navigation.mobileMenu.ctaText}</p>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-12 text-center py-4 bg-white hover:bg-[#E8F4FD] text-[#06599B] rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                {contentDictionary.navigation.mobileMenu.ctaButton}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Navbar);
