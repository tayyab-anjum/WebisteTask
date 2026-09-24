"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenPricing: () => void;
}

export function Navbar({ onOpenLogin, onOpenPricing }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-3 sm:pt-4 px-4 flex justify-center items-center z-40 relative">
      {/* Floating Glassmorphic Pill */}
      <nav className="bg-white/20 hover:bg-white/25 backdrop-blur-xl border border-white/30 rounded-full px-5 sm:px-7 py-2 sm:py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] flex items-center justify-between gap-5 sm:gap-9 transition-colors select-none">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 cursor-pointer group">
          {/* SkyHop Flight Glyph */}
          <div className="w-5 h-5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <svg
              className="w-4.5 h-4.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
          <span className="text-white font-bold text-[16px] sm:text-[17px] tracking-tight">
            SkyHop
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-[13.5px] font-medium text-white/90">
          <button
            onClick={onOpenPricing}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </button>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1">
              <span>Company</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>
            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/40 text-zinc-800 text-xs font-medium z-50"
                >
                  <a
                    href="#about"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#careers"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    Careers
                  </a>
                  <a
                    href="#press"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    Press Kit
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Help Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("help")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1">
              <span>Help</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>
            <AnimatePresence>
              {activeDropdown === "help" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/40 text-zinc-800 text-xs font-medium z-50"
                >
                  <a
                    href="#support"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    Customer Support
                  </a>
                  <a
                    href="#docs"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    Documentation
                  </a>
                  <a
                    href="#faq"
                    className="block px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    FAQs
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Action: Log In Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Log in
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white p-1 ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-3 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/40 md:hidden z-50 flex flex-col gap-3 text-zinc-800"
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricing();
              }}
              className="text-left py-2 font-semibold text-sm border-b border-zinc-100 flex items-center justify-between"
            >
              <span>Pricing Plans</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-semibold text-sm border-b border-zinc-100"
            >
              Company Overview
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 font-semibold text-sm border-b border-zinc-100"
            >
              Help & Support
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full mt-2 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-semibold text-sm transition-colors text-center"
            >
              Sign In to SkyHop
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
