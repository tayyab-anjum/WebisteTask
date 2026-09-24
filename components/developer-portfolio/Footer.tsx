"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 py-12 bg-white select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-tight text-zinc-950 font-sans">
            Stage
          </span>
          <span className="text-xs text-zinc-400 font-medium">
            — The API-based developer portfolio
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-semibold text-zinc-500">
          <a href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </a>
          <a href="#design-system" className="hover:text-zinc-950 transition-colors">
            Design System
          </a>
          <a href="#docs" className="hover:text-zinc-950 transition-colors">
            Documentation
          </a>
          <a href="#privacy" className="hover:text-zinc-950 transition-colors">
            Privacy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-zinc-400 font-medium">
          © {new Date().getFullYear()} Stage Technologies Inc.
        </div>
      </div>
    </footer>
  );
}
