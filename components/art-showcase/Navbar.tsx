"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const [activeNav, setActiveNav] = useState("Get Started");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navLinks = [
    { name: "Get Started", hasDot: false },
    { name: "Create strategy", hasDot: true },
    { name: "Pricing", hasDot: false },
    { name: "Contact", hasDot: false },
    { name: "Solution", hasDot: false },
    { name: "E-Commerce", hasDot: false },
  ];

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between relative z-30 select-none">
      {/* Brand Logo: AuraArt */}
      <div className="flex items-center gap-3 cursor-pointer group">
        {/* Mint / Teal Art Prism Logo */}
        <div className="w-8 h-8 relative flex items-center justify-center">
          <svg
            className="w-7 h-7 text-[#2DD4BF] group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top faceted diamond */}
            <path
              d="M16 3L27 12L16 29L5 12L16 3Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Inner facet lines */}
            <path
              d="M5 12H27M16 3V29M10 12L16 29L22 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              className="opacity-75"
            />
          </svg>
        </div>

        <span className="font-bold text-[19px] tracking-tight text-[#18181B]">
          AuraArt
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#18181B]">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveNav(link.name)}
            className="relative py-1 flex items-center gap-1.5 hover:text-neutral-600 transition-colors cursor-pointer group"
          >
            {link.hasDot && (
              <span className="w-2 h-2 rounded-full bg-[#18181B] group-hover:scale-125 transition-transform" />
            )}
            <span>{link.name}</span>
            {activeNav === link.name && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-[#18181B]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Right Controls: User Profile + Sun/Theme Icon */}
      <div className="flex items-center gap-3">
        {/* User Icon Button */}
        <button
          aria-label="User Profile"
          className="w-9 h-9 rounded-full bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-[#18181B] hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
        >
          <User className="w-4 h-4" />
        </button>

        {/* Theme Toggle Sun Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-full bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-[#18181B] hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden w-9 h-9 rounded-full bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center text-[#18181B] hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer ml-1"
        >
          {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-6 right-6 bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl flex flex-col gap-4 lg:hidden z-50 mt-2"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveNav(link.name);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between text-left py-2 text-sm font-medium text-neutral-800 hover:text-neutral-950 border-b border-neutral-100 last:border-none"
            >
              <div className="flex items-center gap-2">
                {link.hasDot && <span className="w-2 h-2 rounded-full bg-neutral-900" />}
                <span>{link.name}</span>
              </div>
              {activeNav === link.name && <span className="text-xs font-bold text-teal-600">●</span>}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
