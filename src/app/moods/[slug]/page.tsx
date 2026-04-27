import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeachMoodDetailPage } from "@/components/beach-mood-detail/beach-mood-detail-page";
import { SiteChrome } from "@/components/layout/site-chrome";
import { beachMoodsCatalog } from "@/data/beach-moods-catalog";
import {
  getMoodDetailPageData,
  moodPageTitle,
  moodSlugAliases,
} from "@/data/beach-mood-detail";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const m of beachMoodsCatalog) slugs.add(m.slug);
  for (const s of Object.keys(moodSlugAliases)) slugs.add(s);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getMoodDetailPageData(slug);
  if (!data) {
    return { title: "Beach mood — OnlyBeaches" };
  }
  const label = moodPageTitle(data.mood);
  return {
    title: `${label} — OnlyBeaches`,
    description: data.heroDescription.slice(0, 155),
  };
}

export default async function BeachMoodDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const data = getMoodDetailPageData(slug);
  if (!data) notFound();

  return (
    <SiteChrome preset="app">
      <BeachMoodDetailPage data={data} />
    </SiteChrome>
  );
}
