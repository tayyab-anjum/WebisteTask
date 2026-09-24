"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Palette,
  Plane,
  TrendingUp,
  Building2,
  CreditCard,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const SITES = [
  {
    num: "01",
    title: "Ride-Share Trip Details",
    route: "/ride-trip-details",
    tag: "Dark Mobility UI",
    icon: Car,
    accent: "from-emerald-500/20 to-emerald-950/40",
    borderHover: "hover:border-emerald-500/60",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    desc: "Route telemetry, live vehicle metrics, fare breakdown, and driver spotlight.",
  },
  {
    num: "02",
    title: "Art Showcase Landing",
    route: "/art-showcase",
    tag: "Editorial Gallery",
    icon: Palette,
    accent: "from-amber-500/20 to-orange-950/40",
    borderHover: "hover:border-amber-500/60",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    desc: "Interactive artist exhibit cards, curation filter tabs, and responsive layout.",
  },
  {
    num: "03",
    title: "Travel App Landing",
    route: "/travel-landing",
    tag: "Atmospheric Clouds",
    icon: Plane,
    accent: "from-sky-500/20 to-blue-950/40",
    borderHover: "hover:border-sky-500/60",
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    desc: "High-altitude clouds backdrop, destination cards, and travel search booking.",
  },
  {
    num: "04",
    title: "Finance Dashboard Landing",
    route: "/finance-landing",
    tag: "Fintech Platform",
    icon: TrendingUp,
    accent: "from-cyan-500/20 to-blue-950/40",
    borderHover: "hover:border-cyan-500/60",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    desc: "Asset analytics, credit card security preview, and spending charts.",
  },
  {
    num: "05",
    title: "Real Estate Investment",
    route: "/real-estate-landing",
    tag: "Architectural Platform",
    icon: Building2,
    accent: "from-zinc-500/20 to-zinc-900/40",
    borderHover: "hover:border-zinc-400/60",
    badge: "bg-zinc-500/10 text-zinc-300 border-zinc-500/30",
    desc: "Full-width property map, scattered investment cards, and value proposition.",
  },
  {
    num: "06",
    title: "Pricing & Plans",
    route: "/pricing-plans",
    tag: "Neumorphic SaaS",
    icon: CreditCard,
    accent: "from-purple-500/20 to-pink-950/40",
    borderHover: "hover:border-purple-500/60",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    desc: "Annual gradient toggle, authentic 3D brand icons, and centered FAQ section.",
  },
  {
    num: "07",
    title: "Developer Portfolio",
    route: "/developer-portfolio",
    tag: "Tayyab • API First",
    icon: Code2,
    accent: "from-indigo-500/20 to-slate-950/40",
    borderHover: "hover:border-indigo-500/60",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    desc: "Authentic iPhone mockup with notch and orbit rings for Tayyab.",
  },
];

export default function ShowcaseHub() {
  return (
    <main className="min-h-screen bg-[#08080A] text-zinc-100 flex items-center justify-center p-6 sm:p-10 lg:p-16 select-none font-sans antialiased relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1400px] mx-auto">
        {/* 7 Interactive Cards Grid (No Headings) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {SITES.map((site) => {
            const Icon = site.icon;
            return (
              <Link
                key={site.route}
                href={site.route}
                className="group block focus:outline-hidden"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 380, damping: 25 }}
                  className={`h-full bg-zinc-900/60 hover:bg-zinc-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-zinc-800/80 ${site.borderHover} transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Subtle Background Accent Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${site.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Card Header: Number + Icon + Arrow */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-black tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {site.num}
                      </span>

                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-transparent flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${site.badge}`}
                      >
                        {site.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-black text-white tracking-tight leading-snug group-hover:text-zinc-100 transition-colors mb-2">
                      {site.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed">
                      {site.desc}
                    </p>
                  </div>

                  {/* Bottom Route Indicator */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <span>{site.route}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-sans font-semibold">
                      Explore →
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
