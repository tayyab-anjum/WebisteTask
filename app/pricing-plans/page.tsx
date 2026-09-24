"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/pricing-plans/Navbar";
import { HeadlineSection } from "@/components/pricing-plans/HeadlineSection";
import { PricingCards } from "@/components/pricing-plans/PricingCards";
import { FaqSection } from "@/components/pricing-plans/FaqSection";
import { Footer } from "@/components/pricing-plans/Footer";
import {
  ScheduleCallModal,
  PlanModal,
} from "@/components/pricing-plans/Modals";

export default function PricingPlansPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan({ name: planName, price });
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-zinc-950 font-sans antialiased flex flex-col justify-between selection:bg-zinc-950 selection:text-white relative overflow-x-hidden">
      {/* Top Header */}
      <Navbar onScheduleCall={() => setIsScheduleCallOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Dynamic Headline with 3D Badges & Gradient Annual Toggle */}
        <HeadlineSection
          isAnnual={isAnnual}
          onToggleAnnual={() => setIsAnnual(!isAnnual)}
        />

        {/* Pricing Cards (Free $0/mo & Personal $69/mo) */}
        <PricingCards
          isAnnual={isAnnual}
          onSelectPlan={handleSelectPlan}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ScheduleCallModal
        isOpen={isScheduleCallOpen}
        onClose={() => setIsScheduleCallOpen(false)}
      />

      <PlanModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ""}
        price={selectedPlan?.price || ""}
        isAnnual={isAnnual}
      />
    </div>
  );
}
