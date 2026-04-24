import type { Metadata } from "next";
import { ExploreBeaches } from "@/components/explore-beaches/explore-beaches";

export const metadata: Metadata = {
  title: "Explore Beaches — OnlyBeaches",
  description:
    "Browse beaches by vibe on the map. Filter by white sand, clear water, surfing, and more.",
};

export default function ExploreBeachesPage() {
  return <ExploreBeaches />;
}
