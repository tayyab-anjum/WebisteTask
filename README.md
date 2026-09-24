# Tayyab UI — 7 Pixel-Accurate Web Application Showcase

A high-performance collection of **7 pixel-accurate modern web applications and landing pages** recreated from UI reference designs. Built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Live Deployment & Links

- **Live Public URL**: [https://webiste-task.vercel.app/](https://webiste-task.vercel.app/)
- **GitHub Repository**: [https://github.com/tayyab-anjum/WebisteTask](https://github.com/tayyab-anjum/WebisteTask)

---

## 📱 The 7 Showcase Websites

All 7 sites can be explored directly from the interactive main hub at [webiste-task.vercel.app](https://webiste-task.vercel.app/) or locally at `http://localhost:3000`:

| # | Route | Project Name | Live Demo Link | Description & Visual Theme |
|---|---|---|---|---|
| **01** | `/ride-trip-details` | **Ride-Share Trip Details** | [View Live Demo](https://webiste-task.vercel.app/ride-trip-details) | Dark mobility UI with live interactive route canvas, vehicle battery/telemetry metrics, driver card, and fare-split modal. |
| **02** | `/art-showcase` | **Art Showcase Landing** | [View Live Demo](https://webiste-task.vercel.app/art-showcase) | Curated editorial fine art gallery featuring 7 interactive fanned cards, artist profile, and exhibition membership modal. |
| **03** | `/travel-landing` | **Travel App Landing** | [View Live Demo](https://webiste-task.vercel.app/travel-landing) | Atmospheric high-altitude cloudscape backdrop, floating destination cards, booking search, and interactive flight radar. |
| **04** | `/finance-landing` | **Finance Dashboard Landing** | [View Live Demo](https://webiste-task.vercel.app/finance-landing) | Ultra-clean dark fintech interface, real-time spending telemetry chart, virtual card preview, and instant transfer modal. |
| **05** | `/real-estate-landing` | **Real Estate Investment** | [View Live Demo](https://webiste-task.vercel.app/real-estate-landing) | Full-width architectural property canvas with interactive pins, scattered property spotlights, and value proposition bento grid. |
| **06** | `/pricing-plans` | **Pricing & Plans** | [View Live Demo](https://webiste-task.vercel.app/pricing-plans) | 3D annual discount toggle, authentic colorful creative app badges, equalized pricing cards, and centered FAQ accordion. |
| **07** | `/developer-portfolio` | **Developer Portfolio (Tayyab)** | [View Live Demo](https://webiste-task.vercel.app/developer-portfolio) | Realistic 3D iPhone mockup with Apple notch, speaker receiver, home bar, celestial orbit rings, and live light/dark theme switch. |

---

## 🎨 Design Philosophy & Original Placeholder Branding

In accordance with frontend fidelity standards and trademark rules:
- **No copied trademarks**: All corporate partner and brand logos are replaced with **original, high-aesthetic lookalike placeholder brands** that preserve the exact layout, visual weight, and typography:
  - `Velo` (Mobility lookalike)
  - `Haven` (Real estate lookalike with architectural roof glyph)
  - `Prism` (Collaborative canvas lookalike with geometric mark)
  - `Orbit` (Search & cloud lookalike)
  - `Drop` (Content platform lookalike with water droplet badge)
  - `DEV` (Developer ecosystem lookalike)
  - `Sync` (Telemetry & Git integration)
  - `CyberEV` (Lookalike EV vehicle in mobility app)
  - `Creative Studio Badges` (Original lookalike design & studio icons in pricing)
- **High-Fidelity Assets**: Photographic villa architecture, high-altitude cloudscapes, editorial art, and developer portrait avatars.
- **Full-Screen Expansive Layout**: Designed for authentic production websites with `max-w-[1500px]` containers and responsive mobile breakpoints (375px+).

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components + Client Interactivity)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety across all routes)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Hand-crafted SVG Vectors

```
tayyab/
├── app/
│   ├── page.tsx                     # 7-card interactive showcase hub
│   ├── layout.tsx                   # Dynamic metadata & Geist font family
│   ├── ride-trip-details/           # Design 1 (+ layout.tsx with custom metadata)
│   ├── art-showcase/                # Design 2 (+ layout.tsx with custom metadata)
│   ├── travel-landing/              # Design 3 (+ layout.tsx with custom metadata)
│   ├── finance-landing/             # Design 4 (+ layout.tsx with custom metadata)
│   ├── real-estate-landing/         # Design 5 (+ layout.tsx with custom metadata)
│   ├── pricing-plans/               # Design 6 (+ layout.tsx with custom metadata)
│   └── developer-portfolio/         # Design 7 (+ layout.tsx with custom metadata)
├── components/                      # Isolated components for each design
│   ├── ride-trip-details/
│   ├── art-showcase/
│   ├── travel-landing/
│   ├── finance-landing/
│   ├── real-estate-landing/
│   ├── pricing-plans/
│   └── developer-portfolio/
├── designs/                         # 7 original UI reference images
├── public/                          # Optimized imagery (villas, clouds, art, avatars)
└── websites/                        # Detailed architectural documentation
```

---

## 💻 Local Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tayyab-anjum/WebisteTask.git
   cd WebisteTask
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the Showcase Hub.

---

## 🌐 Instant Vercel Deployment

Deploy directly to Vercel in 1 click:

1. Import this repository at [https://vercel.com/new](https://vercel.com/new).
2. Select `Next.js` (detected automatically).
3. Click **Deploy**.
