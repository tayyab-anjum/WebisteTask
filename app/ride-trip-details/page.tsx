"use client";

import React, { useState, useEffect } from "react";
import { DriverCard } from "@/components/ride-trip-details/DriverCard";
import { BadgesRow } from "@/components/ride-trip-details/BadgesRow";
import { TripTimeline, TimelineStop } from "@/components/ride-trip-details/TripTimeline";
import { FareSplitCard } from "@/components/ride-trip-details/FareSplitCard";
import { SetReminderRow } from "@/components/ride-trip-details/SetReminderRow";
import { ActionButtons } from "@/components/ride-trip-details/ActionButtons";
import { CallModal } from "@/components/ride-trip-details/CallModal";
import { FareModal } from "@/components/ride-trip-details/FareModal";
import { Navbar } from "@/components/ride-trip-details/Navbar";
import { LiveRouteMap } from "@/components/ride-trip-details/LiveRouteMap";
import { ShieldCheck } from "lucide-react";

export default function RideTripDetailsPage() {
  const [mounted, setMounted] = useState(false);

  // Interactive states
  const [reminderSet, setReminderSet] = useState(false);
  const [ridersCount, setRidersCount] = useState(3);
  const [showRidersModal, setShowRidersModal] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [activeStop, setActiveStop] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fare calculations ($12.60 total)
  const totalFare = 12.6;
  const farePerSeat = (totalFare / ridersCount).toFixed(2);

  const stops: TimelineStop[] = [
    {
      id: 1,
      type: "Pickup",
      location: "Main Street Bus Stop",
      time: "08:15 AM",
      badge: "(in 5 mins)",
      dotType: "pickup",
      address: "142 Main St, Downtown",
    },
    {
      id: 2,
      type: "Passenger 2",
      location: "Oakwood Apartments",
      time: "08:20 AM",
      badge: null,
      dotType: "hollow-blue",
      address: "88 Oakwood Ave, North District",
    },
    {
      id: 3,
      type: "Passenger 3",
      location: "Central Mall Entrance B",
      time: "08:25 AM",
      badge: null,
      dotType: "hollow-gray",
      address: "400 Grand Ave, Shopping Center",
    },
    {
      id: 4,
      type: "Dropoff",
      location: "Tech Park, Building A",
      time: "08:40 AM",
      badge: "(Estimated arrival)",
      dotType: "dot-gray",
      address: "1000 Innovation Way, Silicon Blvd",
    },
  ];

  const handleReset = () => {
    setHasJoined(false);
    setReminderSet(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181B] antialiased flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Top Header / Navigation */}
      <Navbar onReset={handleReset} />

      {/* Main Website Wrapper */}
      <div className="flex-1 w-full max-w-7xl mx-auto md:px-8 lg:px-12 md:py-8 flex flex-col justify-start">
        {/* Responsive Grid: Stacks on mobile, Side-by-side on Desktop */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Driver Card, Badges, Timeline, & Desktop Map */}
          <div className="w-full md:col-span-7 lg:col-span-7 flex flex-col px-5 pt-1 md:px-0 md:pt-0">
            {/* Driver Profile Card */}
            <DriverCard
              name="Lara Larsson"
              vehicle="CyberEV Model X • Gray"
              rating="4.9"
              totalRides={120}
              plate="ABC 432 KJ"
            />

            {/* Badges Row */}
            <BadgesRow />

            {/* Trip Info Section */}
            <TripTimeline
              stops={stops}
              activeStop={activeStop}
              onSelectStop={(id) => setActiveStop(activeStop === id ? null : id)}
              mounted={mounted}
            />

            {/* Live Interactive Map Preview (Desktop Only) */}
            <LiveRouteMap />
          </div>

          {/* RIGHT COLUMN: Vertically centered/aligned Fare Split Card, Set Reminder, & Action Buttons */}
          <div className="w-full md:col-span-5 lg:col-span-5 flex flex-col px-5 pb-8 md:px-0 md:pb-0 md:pt-4 lg:pt-8 md:sticky md:top-20">
            <div className="w-full bg-white md:border md:border-neutral-200/90 md:rounded-[32px] md:p-6 lg:p-7 md:shadow-[0_10px_35px_-12px_rgba(0,0,0,0.08)] flex flex-col">
              
              <div className="hidden md:flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Payment & Reservation
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  1 Seat Left
                </span>
              </div>

              {/* Fare Split Card */}
              <FareSplitCard
                farePerSeat={farePerSeat}
                ridersCount={ridersCount}
                onOpenModal={() => setShowRidersModal(true)}
              />

              {/* Set Reminder Row */}
              <SetReminderRow
                reminderSet={reminderSet}
                onToggleReminder={() => setReminderSet(!reminderSet)}
              />

              {/* Bottom Actions Row: Phone + Join Ride */}
              <ActionButtons
                hasJoined={hasJoined}
                onCall={() => setIsCalling(true)}
                onJoin={() => setHasJoined(!hasJoined)}
              />

              {/* Mobile Home Indicator (Mobile only) */}
              <div className="md:hidden w-36 h-[4.5px] bg-[#D1D5DB] rounded-full mx-auto mt-4 select-none" />

              {/* Desktop Safety Shield Guarantee */}
              <div className="hidden md:flex items-center gap-3 mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-xs text-neutral-600 leading-normal">
                  Protected by <strong>Drive Safety Shield</strong>. Every driver is verified with background checks and trips are monitored with live GPS tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-100 py-6 text-center text-xs text-neutral-400">
        <p>© 2026 Drive Inc. Frontend Prototype</p>
      </footer>

      {/* Calling Modal */}
      <CallModal
        isOpen={isCalling}
        onClose={() => setIsCalling(false)}
        driverName="Lara Larsson"
        vehicle="CyberEV Model X"
        plate="ABC 432 KJ"
      />

      {/* Fare Split Modal */}
      <FareModal
        isOpen={showRidersModal}
        onClose={() => setShowRidersModal(false)}
        ridersCount={ridersCount}
        onSelectRiders={(count) => setRidersCount(count)}
        totalFare={totalFare}
      />
    </div>
  );
}
