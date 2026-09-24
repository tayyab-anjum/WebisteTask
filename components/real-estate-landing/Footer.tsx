"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-zinc-200/80 pt-20 pb-16 select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-zinc-200/80">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex items-end gap-[3px] h-5 w-5">
                <span className="w-1.5 h-2.5 bg-zinc-950 rounded-xs" />
                <span className="w-1.5 h-4 bg-zinc-950 rounded-xs" />
                <span className="w-1.5 h-5 bg-zinc-950 rounded-xs" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-950">
                Brickwise
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mt-3.5 max-w-xs">
              Democratizing high-yield real estate investments through modern fractional ownership.
              SEC-qualified, fully hands-off, monthly cash dividends.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-3">
                Invest
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 font-medium">
                <li><a href="#properties" className="hover:text-zinc-950 transition-colors">All Properties</a></li>
                <li><a href="#oceanfront" className="hover:text-zinc-950 transition-colors">Oceanfront Villas</a></li>
                <li><a href="#commercial" className="hover:text-zinc-950 transition-colors">Residential Portfolios</a></li>
                <li><a href="#returns" className="hover:text-zinc-950 transition-colors">Historical Returns</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-3">
                Company
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 font-medium">
                <li><a href="#about" className="hover:text-zinc-950 transition-colors">About Brickwise</a></li>
                <li><a href="#team" className="hover:text-zinc-950 transition-colors">Leadership & Partners</a></li>
                <li><a href="#careers" className="hover:text-zinc-950 transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-zinc-950 transition-colors">Press & Media</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-3">
                Legal & Security
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 font-medium">
                <li><a href="#sec" className="hover:text-zinc-950 transition-colors">SEC Filings</a></li>
                <li><a href="#privacy" className="hover:text-zinc-950 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-zinc-950 transition-colors">Terms of Service</a></li>
                <li><a href="#disclosures" className="hover:text-zinc-950 transition-colors">Risk Disclosures</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Attribution Bar Matching Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-zinc-400 tracking-wider gap-3">
          <div>LANDING PAGE DESIGN</div>
          <div className="text-zinc-500 font-bold">@BHAVIKDESIGNS</div>
          <div>2025</div>
        </div>
      </div>
    </footer>
  );
}
