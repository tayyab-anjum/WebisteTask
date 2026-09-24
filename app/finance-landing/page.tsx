"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/finance-landing/Navbar";
import { HeroSection } from "@/components/finance-landing/HeroSection";
import { SocialProof } from "@/components/finance-landing/SocialProof";
import { AnalyticsSection } from "@/components/finance-landing/AnalyticsSection";
import {
  SendModal,
  ReceiveModal,
  ConvertModal,
  GetStartedModal,
} from "@/components/finance-landing/Modals";

export default function FinanceLandingPage() {
  const [isSendOpen, setIsSendOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [isConvertOpen, setIsConvertOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased flex flex-col justify-between selection:bg-[#2563EB] selection:text-white relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={() => setIsGetStartedOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          onGetStarted={() => setIsGetStartedOpen(true)}
          onSend={() => setIsSendOpen(true)}
          onReceive={() => setIsReceiveOpen(true)}
          onConvert={() => setIsConvertOpen(true)}
        />

        {/* Social Proof & Metrics */}
        <SocialProof />

        {/* Analytics Bento Showcase */}
        <AnalyticsSection
          onSend={() => setIsSendOpen(true)}
          onReceive={() => setIsReceiveOpen(true)}
          onConvert={() => setIsConvertOpen(true)}
        />
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#FAFAFA] border-t border-zinc-100 py-8 text-center text-xs text-zinc-500 select-none">
        <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center p-1">
              <div className="w-full h-1 bg-white/40 rounded-xs" />
            </div>
            <span className="font-bold text-zinc-900 text-sm">FinSuite</span>
          </div>
          <p>© 2026 FinSuite Inc. All rights reserved. Built for modern financial intelligence.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#privacy" className="hover:text-zinc-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-600">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SendModal isOpen={isSendOpen} onClose={() => setIsSendOpen(false)} />
      <ReceiveModal isOpen={isReceiveOpen} onClose={() => setIsReceiveOpen(false)} />
      <ConvertModal isOpen={isConvertOpen} onClose={() => setIsConvertOpen(false)} />
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </div>
  );
}
