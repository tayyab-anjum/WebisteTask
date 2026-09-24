"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/developer-portfolio/Navbar";
import { HeroSection } from "@/components/developer-portfolio/HeroSection";
import { FeaturesSection } from "@/components/developer-portfolio/FeaturesSection";
import { Footer } from "@/components/developer-portfolio/Footer";
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
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col justify-between selection:bg-zinc-950 selection:text-white relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        onContactClick={() => setContactOpen(true)}
        onSignUpClick={() => setGetStartedOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section matching exact reference design */}
        <HeroSection
          onGetStarted={() => setGetStartedOpen(true)}
          onExperienceFuture={() => setExperienceOpen(true)}
        />

        {/* Developer First API & Architecture Features */}
        <div id="features">
          <FeaturesSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

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
