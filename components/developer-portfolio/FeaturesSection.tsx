"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  BarChart3,
  Globe2,
  Terminal,
  Copy,
  Check,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export function FeaturesSection() {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "typescript">("curl");

  const curlCode = `curl -X GET "https://api.stage.dev/v1/portfolio/tayyab" \\
  -H "Authorization: Bearer stage_live_9482bf" \\
  -H "Content-Type: application/json"`;

  const tsCode = `import { StageClient } from "@stage/sdk";

const stage = new StageClient({ apiKey: process.env.STAGE_API_KEY });
const portfolio = await stage.getProfile("tayyab");

console.log(portfolio.headline); // "Software designer, founder, and amateur astronaut."`;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCodeTab === "curl" ? curlCode : tsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featureCards = [
    {
      icon: Terminal,
      title: "API-First Architecture",
      desc: "Fetch structured JSON data directly to your Next.js, Astro, or SvelteKit application with sub-millisecond edge latency.",
      badge: "REST & GraphQL",
    },
    {
      icon: BarChart3,
      title: "Recruiter Analytics",
      desc: "Track which tech leads and recruiters viewed your repos, clicked your project demos, and copied your email.",
      badge: "Live Telemetry",
    },
    {
      icon: Globe2,
      title: "Custom Domain Routing",
      desc: "Connect your personal domain in 1-click with automated global SSL certificates and CDN edge caching.",
      badge: "Instant DNS",
    },
    {
      icon: Layers,
      title: "Building Blocks",
      desc: "Mix and match interactive components: GitHub stats, live terminal previews, Spotify player, and calendly embeds.",
      badge: "30+ Widgets",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-zinc-50/70 border-t border-zinc-200/60 select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold bg-white border border-zinc-200 px-3 py-1 rounded-full shadow-2xs">
            DEVELOPER FIRST
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mt-4 mb-4">
            A portfolio that works like your code.
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
            Stop building static HTML templates from scratch every six months. Manage
            your professional achievements through a typed API and render them anywhere.
          </p>
        </div>

        {/* Code Playground Box */}
        <div className="bg-zinc-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-800 text-zinc-100 mb-16 sm:mb-24 overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-zinc-400 ml-3 hidden sm:inline">
                stage-api-v1.sh
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Tab Selector */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 flex items-center text-xs font-medium">
                <button
                  onClick={() => setActiveCodeTab("curl")}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeCodeTab === "curl"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setActiveCodeTab("typescript")}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeCodeTab === "typescript"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  TypeScript SDK
                </button>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          <pre className="font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto leading-relaxed p-2">
            <code>{activeCodeTab === "curl" ? curlCode : tsCode}</code>
          </pre>
        </div>

        {/* 4 Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featureCards.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
