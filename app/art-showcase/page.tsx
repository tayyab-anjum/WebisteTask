"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/art-showcase/Navbar";
import { HeroHeadline } from "@/components/art-showcase/HeroHeadline";
import { FannedCards } from "@/components/art-showcase/FannedCards";
import { CtaButtons } from "@/components/art-showcase/CtaButtons";
import { JoinModal, ArtworkModal } from "@/components/art-showcase/JoinModal";
import { CardData } from "@/components/art-showcase/ArtworkCard";

export default function ArtShowcasePage() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleReadMore = () => {
    // Smooth scroll down to details or trigger join modal
    setIsJoinOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181B] antialiased flex flex-col justify-between selection:bg-neutral-900 selection:text-white relative overflow-x-hidden">
      {/* Subtle ambient lighting / texture matching reference */}
      <div className="absolute inset-0 bg-radial from-neutral-50/50 via-white to-neutral-100/30 pointer-events-none" />

      {/* Top Navigation */}
      <Navbar />

      {/* Hero Content Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-auto py-6 sm:py-10 relative z-10">
        {/* Main Headline */}
        <HeroHeadline />

        {/* Fanned Stack of 7 Artwork Cards */}
        <FannedCards onSelectCard={(card) => setSelectedCard(card)} />

        {/* Subtitle & Action Buttons */}
        <CtaButtons
          onJoin={() => setIsJoinOpen(true)}
          onReadMore={handleReadMore}
        />
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="w-full py-6 text-center text-xs text-neutral-400 select-none border-t border-neutral-100">
        <p>© 2026 Pallet Ross Inc. All rights reserved.</p>
      </footer>

      {/* Modals */}
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <ArtworkModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
