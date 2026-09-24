"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onLoginClick?: () => void;
  onJoinClick?: () => void;
  onNavigate?: (tab: string) => void;
}

export function Navbar({
  onLoginClick,
  onJoinClick,
  onNavigate,
}: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Properties", "About", "Contact"];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    if (onNavigate) onNavigate(item);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 h-22 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick("Home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Ascending 3-pillar architectural / bar icon */}
          <div className="flex items-end gap-[3.5px] h-6 w-6">
            <span className="w-1.5 h-3 bg-zinc-950 rounded-xs group-hover:bg-zinc-700 transition-colors" />
            <span className="w-1.5 h-4.5 bg-zinc-950 rounded-xs group-hover:bg-zinc-700 transition-colors" />
            <span className="w-1.5 h-6 bg-zinc-950 rounded-xs group-hover:bg-zinc-700 transition-colors" />
          </div>
          <span className="text-2xl font-black tracking-tight text-zinc-950 font-sans">
            Brickwise
          </span>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-12">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative py-2.5 text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-zinc-950 font-bold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-950 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onLoginClick}
            className="text-base font-semibold text-zinc-700 hover:text-zinc-950 px-3 py-2 transition-colors cursor-pointer"
          >
            Login
          </button>

          <button
            onClick={onJoinClick}
            className="group relative inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
          >
            <span>Join Now</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
                  if (onLoginClick) onLoginClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-zinc-800 border border-zinc-200 rounded-full"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onJoinClick) onJoinClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold bg-zinc-950 text-white rounded-full flex items-center justify-center gap-1.5"
              >
                <span>Join Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
