import { beachImages } from "@/lib/beach-images";

export type StayCatalogEntry = {
  slug: string;
  name: string;
  place: string;
  from: number;
  night: number;
  rating: string;
  reviews: number;
  src: string;
};

export const staysNearBeachesCatalog: StayCatalogEntry[] = [
  {
    slug: "hotel-bellavista-manhattan",
    name: "Hotel Bellavista",
    place: "New York, United States",
    from: 1250,
    night: 1250,
    rating: "4.9",
    reviews: 892,
    src: beachImages.home.stay1,
  },
  {
    slug: "hotel-paradiso",
    name: "Hotel Paradiso",
    place: "New York, United States",
    from: 890,
    night: 890,
    rating: "4.9",
    reviews: 543,
    src: beachImages.home.stay2,
  },
  {
    slug: "grand-hotel-tevere",
    name: "Grand Hotel Tevere",
    place: "New York, United States",
    from: 350,
    night: 350,
    rating: "4.7",
    reviews: 423,
    src: beachImages.home.stay3,
  },
  {
    slug: "hotel-bellavista-brooklyn",
    name: "Hotel Bellavista",
    place: "New York, United States",
    from: 280,
    night: 280,
    rating: "4.6",
    reviews: 301,
    src: beachImages.home.stay4,
  },
  {
    slug: "hotel-bellavista-queens",
    name: "Hotel Bellavista",
    place: "New York, United States",
    from: 280,
    night: 280,
    rating: "4.6",
    reviews: 301,
    src: beachImages.home.stay5,
  },
  {
    slug: "the-driftwood-miami",
    name: "The Driftwood",
    place: "Miami Beach, United States",
    from: 420,
    night: 420,
    rating: "4.8",
    reviews: 612,
    src: beachImages.explore.beach1,
  },
  {
    slug: "shoreline-inn-key-west",
    name: "Shoreline Inn",
    place: "Key West, United States",
    from: 310,
    night: 310,
    rating: "4.7",
    reviews: 428,
    src: beachImages.explore.beach2,
  },
  {
    slug: "coral-bay-suites",
    name: "Coral Bay Suites",
    place: "San Diego, United States",
    from: 265,
    night: 265,
    rating: "4.5",
    reviews: 356,
    src: beachImages.explore.beach3,
  },
  {
    slug: "lagoon-house-malibu",
    name: "Lagoon House",
    place: "Malibu, United States",
    from: 890,
    night: 890,
    rating: "4.9",
    reviews: 1042,
    src: beachImages.explore.beach4,
  },
  {
    slug: "sunrise-palms-honolulu",
    name: "Sunrise Palms",
    place: "Honolulu, United States",
    from: 540,
    night: 540,
    rating: "4.8",
    reviews: 721,
    src: beachImages.trending.diamond,
  },
  {
    slug: "azure-bungalows-charleston",
    name: "Azure Bungalows",
    place: "Charleston, United States",
    from: 380,
    night: 380,
    rating: "4.6",
    reviews: 289,
    src: beachImages.trending.fulhadhoo,
  },
];

export function getStayBySlug(slug: string): StayCatalogEntry | undefined {
  return staysNearBeachesCatalog.find((s) => s.slug === slug);
}
