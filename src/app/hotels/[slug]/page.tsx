import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HotelDetailPage } from "@/components/hotel-detail/hotel-detail-page";
import { SiteChrome } from "@/components/layout/site-chrome";
import { allHotelSlugs, getHotelDetail } from "@/data/hotel-detail";
import { getStayBySlug } from "@/data/stay-near-beaches-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allHotelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) {
    return { title: "Stay — OnlyBeaches" };
  }
  return {
    title: `${stay.name} — OnlyBeaches`,
    description: `Book ${stay.name} in ${stay.place}. Photos, amenities, reviews, and best price on OnlyBeaches.`,
  };
}

export default async function HotelDetailRoute({ params }: Props) {
  const { slug } = await params;
  const data = getHotelDetail(slug);
  if (!data) notFound();

  return (
    <SiteChrome preset="app">
      <HotelDetailPage data={data} />
    </SiteChrome>
  );
}
