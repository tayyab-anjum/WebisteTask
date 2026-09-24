# Workflow — Minimalist Pricing Plans Page

A high-fidelity, pixel-accurate frontend recreation of the modern neumorphic pricing plans design from `designs/Pricing Plans.webp`.

---

## 🏗️ Architecture & Component Hierarchy

```
components/pricing-plans/
├── Navbar.tsx           # Minimal top header with logo and "Schedule a Call →" action
├── HeadlineSection.tsx  # Outlined [PRICING] tag, 4-line typography with 3D app icons and gradient toggle
├── PricingCards.tsx     # Side-by-side Free ($0/mo) and Personal ($69/mo) elevated cards
├── FaqSection.tsx       # Interactive accordion for common questions
├── Modals.tsx           # ScheduleCallModal and PlanModal for interactive checkout preview
└── Footer.tsx           # Understated minimal footer with uptime indicator
```

---

## 🌟 Key Features

1. **Exact Typographic & Layout Recreation**:
   - Outlined `[PRICING]` mono badge.
   - Distinctive 4-line headline:
     - `Better tools` (muted slate gray)
     - `smooth` + 3D elevated icons (Dribbble 🏀, Behance Bē, Cloud ☁) + `workflow` (black bold)
     - `including same great deal,` (muted slate gray)
     - `[Gradient Toggle]` (smooth animated gradient track with 3D sliding knob) + `annually.` (black bold)
   - Toggling annual billing applies a 20% discount badge and dynamically updates pricing across cards ($69/mo → $55/mo).

2. **Pixel-Perfect Plan Cards**:
   - **Free Plan ($0/month)**: Elevated black squircle icon badge, `Get Started` button, and *"Nothing but a Hug"* feature item.
   - **Personal Plan ($69/month)**: Elevated black squircle lightning icon badge, `View Pricing` button, and full tool/customization feature list.

3. **Interactive Modals & FAQ**:
   - Working call scheduling dialog.
   - Subscription checkout simulator.
   - Fully fluid and responsive down to 375px mobile screens.

---

## 🚀 Running Locally

Visit the route:
```
http://localhost:3000/pricing-plans
```
