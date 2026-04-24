import type { Metadata } from "next";
import { ViewFullBeachesPage } from "@/components/view-full-beaches/view-full-beaches-page";

export const metadata: Metadata = {
  title: "Bondi Beach — Full Beach Page | OnlyBeaches",
  description:
    "Full beach detail: vibes, forecast, facilities, reviews, and nearby beaches.",
};

export default function ViewFullBeachesRoute() {
  return <ViewFullBeachesPage />;
}
