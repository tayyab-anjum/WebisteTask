import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkyHop Travel App",
  description: "Explore the skies with high-altitude destination planning and real-time flight tracking.",
};

export default function TravelLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
