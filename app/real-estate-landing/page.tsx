"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/real-estate-landing/Navbar";
import {
  HeroSection,
  INITIAL_PROPERTIES,
} from "@/components/real-estate-landing/HeroSection";
import { PropertyItem } from "@/components/real-estate-landing/MapCanvas";
import { StatsSection } from "@/components/real-estate-landing/StatsSection";
import { ValueBentoSection } from "@/components/real-estate-landing/ValueBentoSection";
import { Footer } from "@/components/real-estate-landing/Footer";
import {
  InvestModal,
  FindBestModal,
  JoinModal,
  WhatIsArrivedModal,
} from "@/components/real-estate-landing/InteractiveModals";

export default function RealEstateLandingPage() {
  const [investModalOpen, setInvestModalOpen] = useState(false);
  const [investProperty, setInvestProperty] = useState<PropertyItem | null>(
    INITIAL_PROPERTIES[0]
  );
  const [findBestModalOpen, setFindBestModalOpenOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [whatIsArrivedOpen, setWhatIsArrivedOpen] = useState(false);

  const handleOpenInvest = (prop: PropertyItem) => {
    setInvestProperty(prop);
    setInvestModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col justify-between selection:bg-zinc-950 selection:text-white relative overflow-x-hidden">
      {/* Top Sticky Header */}
      <Navbar
        onLoginClick={() => setJoinModalOpen(true)}
        onJoinClick={() => setJoinModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with Map & Spotlight Card */}
        <HeroSection
          onInvestNow={handleOpenInvest}
          onExploreProperties={() => setFindBestModalOpenOpen(true)}
          onWhatIsArrived={() => setWhatIsArrivedOpen(true)}
        />

        {/* 4 Stats Metrics Row */}
        <StatsSection />

        {/* Value Proposition Bento Grid Section */}
        <ValueBentoSection
          onFindBestForYou={() => setFindBestModalOpenOpen(true)}
          onSelectPropertyFromBento={() => handleOpenInvest(INITIAL_PROPERTIES[5])}
        />
      </main>

      {/* Bottom Footer with Reference Attribution */}
      <Footer />

      {/* Interactive Modals */}
      <InvestModal
        isOpen={investModalOpen}
        onClose={() => setInvestModalOpen(false)}
        property={investProperty}
      />

      <FindBestModal
        isOpen={findBestModalOpen}
        onClose={() => setFindBestModalOpenOpen(false)}
        onMatched={(matched) => handleOpenInvest(matched)}
      />

      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />

      <WhatIsArrivedModal
        isOpen={whatIsArrivedOpen}
        onClose={() => setWhatIsArrivedOpen(false)}
      />
    </div>
  );
}
