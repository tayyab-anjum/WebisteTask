"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/travel-landing/Navbar";
import { HeroSection } from "@/components/travel-landing/HeroSection";
import { CtaSection } from "@/components/travel-landing/CtaSection";
import { FlightRadarModal } from "@/components/travel-landing/FlightRadarModal";
import { AddDocumentModal } from "@/components/travel-landing/AddDocumentModal";
import { LoginModal, PricingModal } from "@/components/travel-landing/Modals";

export default function TravelLandingPage() {
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white antialiased flex flex-col justify-between selection:bg-white selection:text-sky-900 relative overflow-x-hidden">
      {/* Background Cloud Photography & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base: Thick, natural cloud formations along the bottom */}
        <img
          src="/travel/sky-clouds.jpg"
          alt="Thick bottom clouds background"
          className="w-full h-full object-cover object-bottom opacity-90 scale-100"
        />

        {/* Secondary Layer: Light, delicate clouds only on the sides */}
        <img
          src="/travel/side-clouds.jpg"
          alt="Light side clouds"
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen [mask-image:linear-gradient(to_right,black_0%,black_22%,transparent_42%,transparent_58%,black_78%,black_100%)]"
        />

        {/* Light blue atmospheric wash at top */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0284C7]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top Floating Glass Pill Navbar */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
      />

      {/* Main Hero Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10 my-auto py-5 sm:py-1">
        {/* Integrated Hero: Headline with 4 Cards Hovering Directly Across It */}
        <HeroSection
          onAddStuff={() => setIsAddOpen(true)}
          onCheckLive={() => setIsRadarOpen(true)}
        />

        {/* Subtitle & Download for iOS Action */}
        <CtaSection onDownload={() => {}} />
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-2.5 sm:py-3 text-center text-xs text-white/60 select-none border-t border-white/10 relative z-10">
        <p>© 2026 Capsule Inc. All rights reserved. Travel with confidence.</p>
      </footer>

      {/* Interactive Modals */}
      <FlightRadarModal
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
      />
      <AddDocumentModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
    </div>
  );
}
