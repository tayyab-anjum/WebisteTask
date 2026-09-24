import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tayyab | Stage Developer Portfolio",
  description: "API-based developer portfolio for Tayyab — software designer, founder, and amateur astronaut.",
};

export default function DeveloperPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
