"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { contentDictionary } from "@/lib/content-dictionary";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || pathname !== "/"
          ? "py-4 bg-[#06599B]/95 backdrop-blur-md border-b border-[#06599B]/20"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-32 md:w-40 h-10 flex items-center group-hover:scale-105 transition-transform duration-300">
              <img src="/mindFuseLogo.png" alt={contentDictionary.navigation.logoAlt} className="w-full h-full object-contain object-left" />
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
                className="relative py-2 text-sm font-medium tracking-wide text-[#1A1A1A] hover:text-[#06599B] transition-colors duration-300"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#06599B] to-[#2D7FC0] rounded-full"
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
            className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#06599B] border border-[#06599B] hover:bg-[#0A6AB8] hover:border-[#0A6AB8] overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              {contentDictionary.navigation.ctaButton} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#0A6AB8] to-[#2D7FC0] transition-transform duration-500 ease-out" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#1A1A1A] hover:text-[#06599B] bg-white/80 border border-[#06599B]/20 hover:border-[#06599B]/40 transition-colors"
          aria-label={contentDictionary.common.accessibility.toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#06599B]/10 flex flex-col md:hidden px-8 py-12"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
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
                      className={`block py-2 ${
                        isActive
                          ? "text-gradient-brand"
                          : "text-[#1A1A1A] hover:text-[#06599B]"
                      } transition-colors`}
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
              className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4"
            >
              <p className="text-[#6B7280] text-sm">{contentDictionary.navigation.mobileMenu.ctaText}</p>
              <Link
                href="/contact"
                className="w-full text-center py-4 bg-gradient-to-r from-[#06599B] to-[#2D7FC0] hover:from-[#0A6AB8] hover:to-[#06599B] text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(6,89,155,0.25)]"
              >
                {contentDictionary.navigation.mobileMenu.ctaButton}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
