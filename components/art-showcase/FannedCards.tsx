"use client";

import React, { useState, useEffect } from "react";
import { ArtworkCard, CardData } from "./ArtworkCard";

interface FannedCardsProps {
  onSelectCard: (card: CardData) => void;
}

export function FannedCards({ onSelectCard }: FannedCardsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards: CardData[] = [
    {
      id: 1,
      title: "Punk Riot Street Collage",
      artist: "Marcus Vance",
      rotation: -16,
      imageSrc: "/art/card1.jpg",
    },
    {
      id: 2,
      title: "Aphrodite Blueprint Study",
      artist: "@coplin",
      rotation: -10,
      imageSrc: "/art/card2.jpg",
      tag: {
        name: "@coplin",
        color: "blue",
      },
    },
    {
      id: 3,
      title: "Friends Pop Art Snack",
      artist: "Kiko Studios",
      rotation: -4,
      imageSrc: "/art/card3.jpg",
    },
    {
      id: 4,
      title: "Airborne Rad Sunset Skater",
      artist: "Elena Rostova",
      rotation: 0,
      imageSrc: "/art/card4.jpg",
    },
    {
      id: 5,
      title: "Renaissance Eye Study",
      artist: "Davide N3AC",
      rotation: 5,
      imageSrc: "/art/card5.jpg",
    },
    {
      id: 6,
      title: "Independence Day 66 Hibiscus",
      artist: "Roy Bloom",
      rotation: 10,
      imageSrc: "/art/card6.jpg",
    },
    {
      id: 7,
      title: "The Creator Street Graffiti",
      artist: "@andrea",
      rotation: 16,
      imageSrc: "/art/card7.jpg",
      tag: {
        name: "@andrea",
        color: "green",
      },
    },
  ];

  // Dynamic spacing calculation:
  // - Phone (375px): 34px spacing gives generous card size without shrinking, heavy overlap where cards sit on each other
  // - Tablet & Desktop: progressive spacing for wide luxurious spread
  const spacing =
    windowWidth < 480
      ? 30
      : windowWidth < 640
      ? 38
      : windowWidth < 768
      ? 60
      : windowWidth < 1024
      ? 78
      : 98;

  const isMobile = windowWidth < 640;

  return (
    <div className="w-full relative py-4 sm:py-8 md:py-10 flex flex-col items-center justify-center overflow-visible select-none">
      {/* 
        Responsive Cards Deck:
        - Full 100% scale at all breakpoints (no tiny downscaling)
        - Heavy card overlap on mobile so 7 large cards sit on each other and fit 375px
        - 4th card (id: 4) pops out at the apex
        - Interactive hover lifts, straightens, and scales hovered card to the top
      */}
      <div className="relative flex items-center justify-center h-[260px] xs:h-[275px] sm:h-[295px] md:h-[330px] lg:h-[360px] w-full max-w-6xl mx-auto overflow-visible">
        {cards.map((card, index) => {
          // Center is index 3 (offset from -3 to +3)
          const offsetFromCenter = index - 3;

          return (
            <ArtworkCard
              key={card.id}
              card={card}
              index={index}
              offsetFromCenter={offsetFromCenter}
              spacing={spacing}
              isMobile={isMobile}
              isHovered={hoveredId === card.id}
              isOtherHovered={hoveredId !== null && hoveredId !== card.id}
              onHoverStart={() => setHoveredId(card.id)}
              onHoverEnd={() => setHoveredId(null)}
              onSelect={() => onSelectCard(card)}
            />
          );
        })}
      </div>
    </div>
  );
}
