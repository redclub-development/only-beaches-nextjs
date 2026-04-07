import { BeachEventsLifestyle } from "@/components/beach-events-lifestyle";
import { BeachJournal } from "@/components/beach-journal";
import { BeachesNearYou } from "@/components/beaches-near-you";
import { FindYourVibe } from "@/components/find-your-vibe";
import { FooterWave } from "@/components/footer-wave";
import { GlobalExplorer } from "@/components/global-explorer";
import { HeroSearch } from "@/components/hero-search";
import { HiddenBeachesSection } from "@/components/hidden-beaches-section";
import { PlanBeachTripCta } from "@/components/plan-beach-trip-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StayNearBeaches } from "@/components/stay-near-beaches";
import { ThingsToDo } from "@/components/things-to-do";
import { TrendingBeaches } from "@/components/trending-beaches";

export default function Home() {
  return (
    <>
      <div className="relative">
        <SiteHeader />
        <HeroSearch />
      </div>
      <main className="bg-neutral-50">
        <FindYourVibe />
        <GlobalExplorer />
        <TrendingBeaches />
        <HiddenBeachesSection />
        <BeachesNearYou />
        <StayNearBeaches />
        <ThingsToDo />
        <BeachEventsLifestyle />
        <PlanBeachTripCta />
        <BeachJournal />
        <FooterWave />
      </main>
      <SiteFooter />
    </>
  );
}
