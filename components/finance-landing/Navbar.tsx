"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
}

export function Navbar({ onOpenLogin, onOpenGetStarted }: NavbarProps) {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-40 select-none">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-16 h-22 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          {/* ApexVault Shield / Hexagon Icon */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-sm flex items-center justify-center text-white">
            <svg
              className="w-4.5 h-4.5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="font-extrabold text-[20px] text-zinc-950 tracking-tight">
            ApexVault
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-zinc-600">
          <a href="#home" className="text-zinc-950 font-semibold transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-zinc-950 transition-colors">
            About Us
          </a>
          <a href="#blog" className="hover:text-zinc-950 transition-colors">
            Blog
          </a>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-zinc-950 transition-colors py-1 cursor-pointer">
              <span>Pages</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-44 bg-white rounded-2xl p-2 shadow-xl border border-zinc-100 text-xs font-medium text-zinc-700 z-50"
                >
                  <a
                    href="#analytics"
                    className="block px-3 py-2 rounded-xl hover:bg-zinc-50 transition-colors"
                  >
                    Analytics Engine
                  </a>
                  <a
                    href="#integrations"
                    className="block px-3 py-2 rounded-xl hover:bg-zinc-50 transition-colors"
                  >
                    Integrations
                  </a>
                  <a
                    href="#security"
                    className="block px-3 py-2 rounded-xl hover:bg-zinc-50 transition-colors"
                  >
                    Security & Compliance
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#pricing" className="hover:text-zinc-950 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={onOpenLogin}
            className="text-zinc-800 hover:text-zinc-950 text-sm font-semibold transition-colors cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={onOpenGetStarted}
            className="bg-[#09090b] hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-800 p-1"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-100 bg-white px-5 py-6 flex flex-col gap-4"
          >
            <a href="#home" className="font-semibold text-zinc-900 py-1">
              Home
            </a>
            <a href="#about" className="font-medium text-zinc-600 py-1">
              About Us
            </a>
            <a href="#blog" className="font-medium text-zinc-600 py-1">
              Blog
            </a>
            <a href="#pricing" className="font-medium text-zinc-600 py-1">
              Pricing
            </a>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-2.5 text-center font-semibold text-zinc-800 border border-zinc-200 rounded-full text-sm"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-2.5 bg-[#09090b] text-white rounded-full font-semibold text-sm shadow-sm"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
