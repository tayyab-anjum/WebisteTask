"use client";

import React from "react";
import { Play } from "lucide-react";
import { PhoneMockup } from "@/components/developer-portfolio/PhoneMockup";
import { PartnerLogos } from "@/components/developer-portfolio/PartnerLogos";

interface HeroSectionProps {
  onGetStarted: () => void;
  onExperienceFuture: () => void;
}

export function HeroSection({
  onGetStarted,
  onExperienceFuture,
}: HeroSectionProps) {
  return (
    <section className="w-full pt-12 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 overflow-hidden select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline, CTAs, Partner Logos */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] font-black text-zinc-950 tracking-[-0.04em] leading-[1.05]">
              API-based developer portfolio, <br />
              that converts.
            </h1>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-500 font-normal leading-relaxed max-w-2xl mt-6 mb-10">
              Next-gen developer portfolio that helps you showcase your projects,
              skills, and experience. Personalize it by an evergrowing collection
              of building blocks and analyse your growth.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary: Get started */}
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95 text-base text-center"
              >
                Get started
              </button>

              {/* Secondary: Experience the future */}
              <button
                onClick={onExperienceFuture}
                className="w-full sm:w-auto border border-zinc-200/90 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold px-6 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-3 text-base shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center bg-zinc-50">
                  <Play className="w-2.5 h-2.5 text-zinc-700 fill-zinc-700 ml-0.5" />
                </div>
                <span>Experience the future</span>
              </button>
            </div>

            {/* Social Proof Brand Logos Cloud */}
            <PartnerLogos />
          </div>

          {/* Right Column: 3D Smartphone Mockup with Orbit Rings */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
