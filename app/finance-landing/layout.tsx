import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ApexVault — Finance Dashboard",
  description: "Next-generation financial platform with real-time portfolio telemetry and card security.",
};

export default function FinanceLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
