"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onContactClick?: () => void;
  onSignUpClick?: () => void;
  onNavigate?: (tab: string) => void;
}

export function Navbar({
  onContactClick,
  onSignUpClick,
  onNavigate,
}: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Features");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Features", "Design System", "Documentation"];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    if (onNavigate) onNavigate(item);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-8 lg:gap-12">
          <div
            onClick={() => handleNavClick("Features")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-lg bg-zinc-950 flex items-center justify-center text-white text-xs font-mono font-bold">
              &gt;_
            </div>
            <span className="text-2xl font-black tracking-tight text-zinc-950 font-sans group-hover:opacity-80 transition-opacity">
              DevOrbit
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="border border-zinc-200/90 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50/80 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-2xs"
          >
            Contact
          </button>

          <button
            onClick={onSignUpClick}
            className="bg-zinc-950 text-white hover:bg-zinc-800 px-4.5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-800 hover:text-zinc-950 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 px-6 py-5 flex flex-col gap-4 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left text-base py-2 font-medium ${
                    activeTab === item
                      ? "text-zinc-950 font-bold"
                      : "text-zinc-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onContactClick) onContactClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-zinc-800 border border-zinc-200 rounded-xl"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onSignUpClick) onSignUpClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold bg-zinc-950 text-white rounded-xl"
              >
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
