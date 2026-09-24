import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brickwise Real Estate Investment",
  description: "Invest where it matters with fractional architectural villas and residential homes.",
};

export default function RealEstateLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
