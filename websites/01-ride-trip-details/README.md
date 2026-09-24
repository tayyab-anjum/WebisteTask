# 01: Drive — Ride-Share Trip Details

> Pixel-accurate recreation of the **Ride-Share Trip Details** mobile reference design, scaled seamlessly into an authentic full-width web application.

---

## 🚗 Overview
- **Brand**: Drive (with bunny burrow vector emblem)
- **Route**: [`app/ride-trip-details/page.tsx`](/app/ride-trip-details/page.tsx)
- **Local URL**: `http://localhost:3000/ride-trip-details`
- **Component Directory**: [`components/ride-trip-details/`](/components/ride-trip-details/)

---

## 📐 Key Features & Fidelity Highlights
1. **Driver Card**: Lara Larsson with Tesla Model X, ★ 4.9 (120 rides) in brand blue, Plate: ABC 432 KJ.
2. **Badges**:
   - **Verified ID**: Scalloped check badge, `#EFF6FF` pill background, `#2563EB` text & icon.
   - **Safe Driver**: Solid green shield, `#ECFDF5` pill background, `#16A34A` text & icon.
3. **Trip Stops Timeline**:
   - **Pickup**: Concentric blue circle with solid center.
   - **Capsule Connector**: Sky-blue capsule pill (`#BFDBFE`) with inner track line connecting Pickup to Stop 2.
   - **Stops 2, 3, 4**: Light blue, light gray, and dotted circles with precise location and timestamps.
4. **Fare Split Card**:
   - Soft luminous mint gradient (`#E6F7ED` to `#FAFCFB`).
   - Interactive fare recalculation modal ($12.60 split among 1–4 riders).
5. **Interactive Actions**:
   - Interactive driver call overlay with audio controls (Mute, Speaker, End call).
   - Set Reminder toggle (`Set ✓`).
   - "Join Ride" confirmation state.
6. **Responsive Experience**:
   - Desktop: Balanced 2-column web app layout with sticky payment dock & live route map.
   - Mobile: Native 375px edge-to-edge view matching the reference screenshot.
