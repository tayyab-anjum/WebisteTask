# Stage — API-Based Developer Portfolio Landing Page

A high-fidelity, pixel-accurate frontend recreation of the modern developer portfolio landing design from `designs/Developer Portfolio Landing.webp`.

---

## 🏗️ Architecture & Component Hierarchy

```
components/developer-portfolio/
├── Navbar.tsx           # Clean top navigation with Stage logo, links (Features, Design System, Docs), Contact & Sign Up
├── HeroSection.tsx      # 2-column hero with bold headline, subtitle, dual CTAs, authentic partner logos, and phone mockup
├── PartnerLogos.tsx     # Exact SVG brand logos: Uber, Zillow, Miro, Google, Drupal, Go (=GO), Git/Sync
├── PhoneMockup.tsx      # Realistic 3D smartphone frame with speaker notch, theme toggle, Felix avatar, and orbit rings
├── FeaturesSection.tsx  # API-first developer code playground (cURL / TypeScript), live telemetry metrics, and bento cards
├── Modals.tsx           # GetStartedModal (API key generator), ExperienceFutureModal (live demo), ContactModal
└── Footer.tsx           # Minimal Stage footer with links and copyright
```

---

## 🌟 Key Features

1. **Pixel-Perfect Hero Section**:
   - Bold, authoritative typography:
     - `API-based developer portfolio,`
     - `that converts.`
   - Subheadline detailing the next-generation developer portfolio platform.
   - Dual Call to Action buttons:
     - `Get started` (solid black rounded pill)
     - `Experience the future` (white pill with circular play indicator)

2. **Authentic Partner Logos Cloud**:
   - High-fidelity vector logos for top engineering organizations:
     - **Uber**
     - **Zillow** (with roof zig-zag mark)
     - **Miro** (geometric 3-pillar mark)
     - **Google**
     - **Drupal** (water droplet mark + wordmark)
     - **Golang** (`=GO` stylized mark)
     - **Git/Sync** circular telemetry icon

3. **Realistic 3D Smartphone Device Mockup with Orbit Rings**:
   - Silver-white device bezel with top speaker slit and camera notch.
   - Concentric circular celestial orbit lines radiating in the background.
   - High-resolution authentic avatar portrait of Felix extracted directly from reference design.
   - Punchy developer bio: *"Software designer, founder, and amateur astronaut."*
   - Interactive theme switcher: click the sun/moon icon to toggle between light and dark mode inside the phone screen!
   - Social links for Twitter, Instagram, GitHub, and LinkedIn.

4. **Interactive Modals & Developer Playground**:
   - `GetStartedModal`: Instantaneous username reservation and API token generator (`stg_live_...`).
   - `ExperienceFutureModal`: Live telemetry simulator showing 78.4% recruiter open rates and 60s edge caching.
   - `ContactModal`: Inquiries for custom enterprise blocks and API limits.
   - Fully responsive across mobile (375px) and expansive desktop (1500px).

---

## 🚀 Running Locally

Visit the route:
```
http://localhost:3000/developer-portfolio
```
