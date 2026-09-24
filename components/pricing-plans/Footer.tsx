"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 py-10 select-none relative z-10 bg-white/50 backdrop-blur-xs">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>All systems operational • 99.99% uptime</span>
        </div>
        <div>
          © 2026 Workflow Inc. Simple, transparent pricing for modern creators.
        </div>
      </div>
    </footer>
  );
}
