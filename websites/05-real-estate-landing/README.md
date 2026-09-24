# Brickwise — Real Estate Investment Landing Page

A high-fidelity, pixel-accurate frontend recreation of the modern fractional real estate investment landing page design from `designs/Real Estate Investment Landing.webp`.

---

## 🏗️ Architecture & Component Hierarchy

```
components/real-estate-landing/
├── Navbar.tsx             # Sticky header with Brickwise logo, active tab indicator, Login & Join CTA
├── HeroSection.tsx        # Hero headline with inline property pill, "What is Arrived?" badge & interactive filter dock
├── MapCanvas.tsx          # Crisp vector street/river map with interactive property pins & spotlight card
├── StatsSection.tsx       # 4 Key metrics ($1B+ Total Invested, 20K+ Customers, 150K+ Listed, 8-12% Return)
├── ValueBentoSection.tsx  # "Discover the value behind smart property investments" + 3-card bento grid
├── InteractiveModals.tsx  # Invest Now share calculator, AI Property Matcher quiz, Join, and Info modals
└── Footer.tsx             # Detailed navigation footer and exact design attribution bar (@BHAVIKDESIGNS 2025)
```

---

## 🌟 Key Features

1. **Pixel-Perfect Alignment to Reference Design**:
   - Exact headline typography: `"Easily Invest in Real Estate to Grow [House Pill] Your Future"`
   - Interactive search dock with Location, Property Type, Budget filters, and circular search button.
   - Vector-rendered road and waterway map canvas with subtle neighborhood labels (`New York`, `Jersey City`, `Hudson Park`).
   - Circular property photo pins scattered realistically across the map with active pin `20` and downward pointer.
   - Centered Spotlight Card (`Luxury Oceanfront Bungalow`, Catonsville, MD, 1,500 sq.ft, 3 Bed, 2 Bath, $20,000 /share).

2. **Bento Feature Grid**:
   - **Smart Suggestions**: AI property scanning card with search input.
   - **99% Trusted Investor**: Shield badge with trust metrics.
   - **Invest Where It Matters**: Radar hotspot visualization (`📍 147`) and 3D fanned stacked property cards (`Modern Architectural Villa`).

3. **Interactive Capabilities**:
   - Clicking any pin dynamically spotlights that property on the map.
   - Working filter bar dropdowns.
   - "Invest Now" modal with share counter, APY dividend projection, and simulated transaction confirmation.
   - "Find the best for you" interactive quiz modal.
   - Fully responsive down to 375px mobile breakpoint without horizontal overflow.

---

## 🚀 Running Locally

Visit the route:
```
http://localhost:3000/real-estate-landing
```
