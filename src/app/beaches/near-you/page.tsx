import type { Metadata } from "next";
import { BeachesNearYouPage } from "@/components/beaches-near-you/beaches-near-you-page";
import { SiteChrome } from "@/components/layout/site-chrome";

export const metadata: Metadata = {
  title: "Beaches near you — OnlyBeaches",
  description:
    "Discover the best beaches around your location — sorted by distance, crowd conditions, and vibe.",
};

export default function BeachesNearYouRoute() {
  return (
    <SiteChrome preset="app">
      <BeachesNearYouPage />
    </SiteChrome>
  );
}
