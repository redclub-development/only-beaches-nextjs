import type { Metadata } from "next";
import { BrowseAllMoods } from "@/components/browse-all-moods/browse-all-moods";
import { SiteChrome } from "@/components/layout/site-chrome";

export const metadata: Metadata = {
  title: "All Beach Moods — OnlyBeaches",
  description:
    "Explore every beach vibe: lifestyle, adventure, family, scenic shores, and more. Filter moods and find your next escape.",
};

export default function BrowseAllMoodsPage() {
  return (
    <SiteChrome preset="app">
      <BrowseAllMoods />
    </SiteChrome>
  );
}
