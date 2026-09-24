"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  SlidersHorizontal,
  Sparkles,
  Info,
  Check,
} from "lucide-react";
import { MapCanvas, PropertyItem } from "./MapCanvas";

interface HeroSectionProps {
  onInvestNow: (property: PropertyItem) => void;
  onExploreProperties: () => void;
  onWhatIsArrived?: () => void;
}

export const INITIAL_PROPERTIES: PropertyItem[] = [
  {
    id: "prop-main",
    pinNumber: 20,
    title: "Luxury Oceanfront Bungalow",
    location: "Catonsville, MD",
    sqft: "1,500 sq.ft",
    beds: "3 Bed",
    baths: "2 Bath",
    pricePerShare: "$20,000",
    image: "/real-estate/oceanfront-bungalow.jpg",
    isNew: true,
    x: 50,
    y: 52,
  },
  {
    id: "prop-1",
    pinNumber: 12,
    title: "Modern Hillside Retreat",
    location: "Aspen, CO",
    sqft: "2,200 sq.ft",
    beds: "4 Bed",
    baths: "3 Bath",
    pricePerShare: "$15,000",
    image: "/real-estate/pin-1.jpg",
    isNew: false,
    x: 14,
    y: 34,
  },
  {
    id: "prop-2",
    pinNumber: 18,
    title: "Glass Horizon Villa",
    location: "Austin, TX",
    sqft: "1,850 sq.ft",
    beds: "3 Bed",
    baths: "2 Bath",
    pricePerShare: "$18,500",
    image: "/real-estate/pin-2.jpg",
    isNew: true,
    x: 28,
    y: 38,
  },
  {
    id: "prop-3",
    pinNumber: 8,
    title: "Sunset Boulevard Residence",
    location: "Miami, FL",
    sqft: "3,100 sq.ft",
    beds: "5 Bed",
    baths: "4 Bath",
    pricePerShare: "$24,000",
    image: "/real-estate/pin-3.jpg",
    isNew: false,
    x: 18,
    y: 58,
  },
  {
    id: "prop-4",
    pinNumber: 15,
    title: "The Highland Townhouse",
    location: "Seattle, WA",
    sqft: "1,420 sq.ft",
    beds: "2 Bed",
    baths: "2 Bath",
    pricePerShare: "$12,000",
    image: "/real-estate/pin-4.jpg",
    isNew: false,
    x: 32,
    y: 54,
  },
  {
    id: "prop-5",
    pinNumber: 31,
    title: "Contemporary Timber Estate",
    location: "Nashville, TN",
    sqft: "2,800 sq.ft",
    beds: "4 Bed",
    baths: "3.5 Bath",
    pricePerShare: "$22,000",
    image: "/real-estate/architectural-villa.jpg",
    isNew: true,
    x: 74,
    y: 36,
  },
  {
    id: "prop-6",
    pinNumber: 27,
    title: "Manhattan Skyline Loft",
    location: "New York, NY",
    sqft: "1,100 sq.ft",
    beds: "2 Bed",
    baths: "2 Bath",
    pricePerShare: "$30,000",
    image: "/real-estate/modern-residence.jpg",
    isNew: false,
    x: 86,
    y: 54,
  },
];

export function HeroSection({
  onInvestNow,
  onExploreProperties,
  onWhatIsArrived,
}: HeroSectionProps) {
  const [properties, setProperties] = useState<PropertyItem[]>(INITIAL_PROPERTIES);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem>(
    INITIAL_PROPERTIES[0]
  );

  // Filter States
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("$500 - $1200");

  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);
  const [isBudgetMenuOpen, setIsBudgetMenuOpen] = useState(false);

  const locationsList = [
    "All Locations",
    "Catonsville, MD",
    "Austin, TX",
    "Miami, FL",
    "New York, NY",
    "Aspen, CO",
  ];

  const typesList = ["All", "Bungalow", "Villa", "Townhouse", "Penthouse"];

  const budgetOptions = [
    "$500 - $1200",
    "$1000 - $2500",
    "$2500 - $5000",
    "$5000+",
  ];

  const handleSearchFilter = () => {
    // When search is executed, highlight a matching property
    if (locationFilter !== "All Locations") {
      const match = properties.find((p) =>
        p.location.toLowerCase().includes(locationFilter.toLowerCase().slice(0, 4))
      );
      if (match) setSelectedProperty(match);
    } else {
      setSelectedProperty(properties[0]);
    }
  };

  return (
    <section className="relative w-full pt-12 sm:pt-16 pb-6 overflow-hidden bg-gradient-to-b from-white via-white to-zinc-50/30">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col items-center">
        {/* Top Info Pill: "What is Arrived?" */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onWhatIsArrived}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all cursor-pointer group mb-8"
        >
          {/* Subtle Orange/Coral Dot with outer glow */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EA580C]" />
          </span>
          <span className="text-xs sm:text-sm font-bold text-zinc-800 tracking-tight">
            What is Arrived?
          </span>
        </motion.button>

        {/* Main Headline with Inline Modern House Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-[-0.04em] text-zinc-950 leading-[1.04] sm:leading-[1.04]">
            <span>Easily Invest in Real Estate</span>
            <br />
            <span className="inline-flex items-center flex-wrap justify-center gap-2.5 sm:gap-4">
              <span>to Grow</span>
              {/* Inline House Thumbnail Pill */}
              <span className="inline-flex items-center justify-center w-18 sm:w-24 h-9 sm:h-12 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl relative align-middle transform -rotate-1 hover:rotate-0 transition-transform">
                <Image
                  src="/real-estate/oceanfront-bungalow.jpg"
                  alt="House Thumbnail"
                  fill
                  priority
                  loading="eager"
                  sizes="96px"
                  className="object-cover"
                />
              </span>
              <span>Your Future</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-zinc-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-6 sm:mt-8">
            Take control of your financial future by diversifying your portfolio with secure
            and high-yield real estate properties.
          </p>
        </motion.div>

        {/* Floating Search / Filter Dock - rounded-3xl on mobile so corners don't cut off text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-3xl lg:max-w-4xl bg-white rounded-3xl sm:rounded-full p-4 sm:p-3 shadow-xl sm:shadow-2xl border border-zinc-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-3 mt-8 sm:mt-12 relative z-40"
        >
          {/* Location Filter */}
          <div className="relative w-full sm:w-auto flex-1 px-3 sm:px-5 py-1 text-left">
            <button
              onClick={() => {
                setIsLocationMenuOpen(!isLocationMenuOpen);
                setIsTypeMenuOpen(false);
                setIsBudgetMenuOpen(false);
              }}
              className="w-full text-left cursor-pointer focus:outline-hidden"
            >
              <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Location
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-900 flex items-center justify-between sm:justify-start gap-1.5 mt-0.5">
                <span className="truncate">{locationFilter}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
              </div>
            </button>

            {/* Location Dropdown */}
            <AnimatePresence>
              {isLocationMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-zinc-100 py-2 z-50"
                >
                  {locationsList.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setLocationFilter(loc);
                        setIsLocationMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-zinc-50 ${
                        locationFilter === loc ? "text-zinc-950 font-bold" : "text-zinc-600"
                      }`}
                    >
                      <span>{loc}</span>
                      {locationFilter === loc && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full h-[1px] bg-zinc-100 sm:hidden" />
          <div className="hidden sm:block w-[1px] h-9 bg-zinc-200" />

          {/* Property Type Filter */}
          <div className="relative w-full sm:w-auto flex-1 px-3 sm:px-5 py-1 text-left">
            <button
              onClick={() => {
                setIsTypeMenuOpen(!isTypeMenuOpen);
                setIsLocationMenuOpen(false);
                setIsBudgetMenuOpen(false);
              }}
              className="w-full text-left cursor-pointer focus:outline-hidden"
            >
              <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Property Type
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-900 flex items-center justify-between sm:justify-start gap-1.5 mt-0.5">
                <span className="truncate">{typeFilter}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
              </div>
            </button>

            {/* Type Dropdown */}
            <AnimatePresence>
              {isTypeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 py-2 z-50"
                >
                  {typesList.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTypeFilter(t);
                        setIsTypeMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-zinc-50 ${
                        typeFilter === t ? "text-zinc-950 font-bold" : "text-zinc-600"
                      }`}
                    >
                      <span>{t}</span>
                      {typeFilter === t && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full h-[1px] bg-zinc-100 sm:hidden" />
          <div className="hidden sm:block w-[1px] h-9 bg-zinc-200" />

          {/* Budget Range Filter */}
          <div className="relative w-full sm:w-auto flex-1 px-3 sm:px-5 py-1 text-left">
            <button
              onClick={() => {
                setIsBudgetMenuOpen(!isBudgetMenuOpen);
                setIsLocationMenuOpen(false);
                setIsTypeMenuOpen(false);
              }}
              className="w-full text-left cursor-pointer focus:outline-hidden"
            >
              <div className="text-[11px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Budget
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-900 flex items-center justify-between sm:justify-start gap-1.5 mt-0.5">
                <span className="truncate">{budgetFilter}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
              </div>
            </button>

            {/* Budget Dropdown */}
            <AnimatePresence>
              {isBudgetMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 sm:left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-zinc-100 py-2 z-50"
                >
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setBudgetFilter(b);
                        setIsBudgetMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between hover:bg-zinc-50 ${
                        budgetFilter === b ? "text-zinc-950 font-bold" : "text-zinc-600"
                      }`}
                    >
                      <span>{b}</span>
                      {budgetFilter === b && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Black Circular Search CTA Button */}
          <button
            onClick={handleSearchFilter}
            className="w-full sm:w-13 sm:h-13 h-12 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            aria-label="Search properties"
          >
            <Search className="w-5 h-5 text-white" />
            <span className="sm:hidden ml-2 text-sm font-bold">Search Properties</span>
          </button>
        </motion.div>
      </div>

      {/* Interactive Map with Scattered Pins and Central Spotlight Card */}
      <div className="w-full -mt-16 sm:-mt-20 relative z-0">
        <MapCanvas
          properties={properties}
          selectedProperty={selectedProperty}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onInvestNow={onInvestNow}
        />
      </div>
    </section>
  );
}
