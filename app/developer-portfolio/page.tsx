"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/developer-portfolio/Navbar";
import { HeroSection } from "@/components/developer-portfolio/HeroSection";
import {
  GetStartedModal,
  ExperienceFutureModal,
  ContactModal,
} from "@/components/developer-portfolio/Modals";

export default function DeveloperPortfolioPage() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-white text-zinc-950 font-sans antialiased flex flex-col justify-between selection:bg-zinc-950 selection:text-white relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        onContactClick={() => setContactOpen(true)}
        onSignUpClick={() => setGetStartedOpen(true)}
      />

      {/* Main Content: Single screen with Hero Section only */}
      <main className="flex-1 w-full flex flex-col justify-center min-h-0">
        <HeroSection
          onGetStarted={() => setGetStartedOpen(true)}
          onExperienceFuture={() => setExperienceOpen(true)}
        />
      </main>

      {/* Modals */}
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
      />

      <ExperienceFutureModal
        isOpen={experienceOpen}
        onClose={() => setExperienceOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
