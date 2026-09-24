# 02: Pallet Ross — Art Showcase Landing

> Pixel-accurate recreation of the **Art Showcase Landing** reference design. Features a fanned deck of 7 interactive artwork cards with creator tags, fluid fan-out physics, and modern typography.

---

## 🎨 Overview
- **Brand**: Pallet Ross (Mint origami pinwheel emblem)
- **Route**: [`app/art-showcase/page.tsx`](/app/art-showcase/page.tsx)
- **Local URL**: `http://localhost:3000/art-showcase`
- **Component Directory**: [`components/art-showcase/`](/components/art-showcase/)

---

## 📐 Key Features & Fidelity Highlights
1. **Top Navigation**:
   - Teal/mint origami pinwheel logo + `Pallet Ross` brand name.
   - Nav links: *Get Started*, *Create strategy* (with black dot), *Pricing*, *Contact*, *Solution*, *E-Commerce*.
   - User profile outline button & brightness theme button.
   - Smooth animated underline indicator on active/hovered link.
2. **Hero Headline**:
   - Crisp geometric typography: *"A place to display your masterpiece."*
3. **Fanned Stack of 7 Artwork Cards**:
   - Fan-out animation from stacked center state on page load.
   - Speech bubble tags: `@coplin` (blue) and `@andrea` (green) floating above their respective cards.
   - Interactive 3D tilt and hover elevation on mouseover.
   - Click card to open preview and inquiry modal.
4. **Call to Action**:
   - Subtitle copy: *"Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them."*
   - Pill button: `Join for $9.99/m` (opens interactive membership modal).
   - Link: `Read more`.
5. **Responsiveness**:
   - Fully fluid from 375px mobile up to ultrawide desktop with zero horizontal scroll.
