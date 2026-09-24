import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Pricing & Plans",
  description: "Simple, transparent pricing for modern creators and engineering workflows.",
};

export default function PricingPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
