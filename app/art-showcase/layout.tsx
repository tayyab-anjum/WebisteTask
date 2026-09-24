import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Showcase Landing",
  description: "Curated modern editorial art gallery showcasing global contemporary masters.",
};

export default function ArtShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
