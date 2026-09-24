import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ride-Share Trip Details",
  description: "Live ride telemetry, GPS route tracking, fare breakdown, and driver spotlight.",
};

export default function RideTripDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
