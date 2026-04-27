/** Curated beach “moods” for the browse-all-moods grid (design mockup data). */

export type MoodCategory =
  | "All"
  | "Lifestyle"
  | "Relaxation"
  | "Adventure"
  | "Family"
  | "Scenic"
  | "Nature"
  | "Luxury";

export type BeachMoodItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Exclude<MoodCategory, "All">;
  beachCount: number;
  imageSrc: string;
};

export const beachMoodsCatalog: BeachMoodItem[] = [
  {
    id: "1",
    slug: "hidden-beaches",
    title: "Hidden beaches",
    description: "Off-the-map coves away from the tourist trail.",
    category: "Scenic",
    beachCount: 184,
    imageSrc: "/Images/image14.png",
  },
  {
    id: "2",
    slug: "white-sand-beaches",
    title: "White sand beaches",
    description: "Powder-fine sand almost too beautiful to walk on.",
    category: "Scenic",
    beachCount: 312,
    imageSrc: "/Images/image13.png",
  },
  {
    id: "3",
    slug: "party-beaches",
    title: "Party beaches",
    description: "Sun, beats, and endless energy until sunrise.",
    category: "Lifestyle",
    beachCount: 96,
    imageSrc: "/Images/image8.png",
  },
  {
    id: "4",
    slug: "snorkeling-beaches",
    title: "Snorkeling beaches",
    description: "Dive into kaleidoscopic coral reefs and marine life.",
    category: "Adventure",
    beachCount: 213,
    imageSrc: "/Images/imge1.png",
  },
  {
    id: "5",
    slug: "romantic-beaches",
    title: "Romantic beaches",
    description: "Golden hours made for two and quiet shorelines.",
    category: "Relaxation",
    beachCount: 142,
    imageSrc: "/Images/image15.png",
  },
  {
    id: "6",
    slug: "surf-beaches",
    title: "Surf beaches",
    description: "Consistent breaks for every skill level.",
    category: "Adventure",
    beachCount: 512,
    imageSrc: "/Images/image11.png",
  },
  {
    id: "7",
    slug: "family-beaches",
    title: "Family beaches",
    description: "Gentle surf, lifeguards, and room to build sandcastles.",
    category: "Family",
    beachCount: 198,
    imageSrc: "/Images/image6.png",
  },
  {
    id: "8",
    slug: "lgbtq-welcoming",
    title: "LGBTQ+ welcoming",
    description: "Vibrant, inclusive shores where everyone belongs.",
    category: "Lifestyle",
    beachCount: 84,
    imageSrc: "/Images/image16.png",
  },
  {
    id: "9",
    slug: "nude-beaches",
    title: "Nude beaches",
    description: "Freedom, acceptance, and the whole sky above you.",
    category: "Lifestyle",
    beachCount: 55,
    imageSrc: "/Images/image17.png",
  },
  {
    id: "10",
    slug: "accessible-beaches",
    title: "Accessible beaches",
    description: "Beautifully designed for all abilities and ages.",
    category: "Family",
    beachCount: 112,
    imageSrc: "/Images/image7.png",
  },
  {
    id: "11",
    slug: "tropical-reefs",
    title: "Tropical reefs",
    description: "Technicolour coral gardens just beneath the surface.",
    category: "Nature",
    beachCount: 167,
    imageSrc: "/Images/exp1.png",
  },
  {
    id: "12",
    slug: "black-sand-beaches",
    title: "Black sand beaches",
    description: "Volcanic drama meets crystalline surf.",
    category: "Scenic",
    beachCount: 48,
    imageSrc: "/Images/image2.jpg",
  },
  {
    id: "13",
    slug: "waterfall-beaches",
    title: "Waterfall beaches",
    description: "Where freshwater cascades meet the open sea.",
    category: "Nature",
    beachCount: 37,
    imageSrc: "/Images/image23.png",
  },
  {
    id: "14",
    slug: "night-swimming",
    title: "Night swimming",
    description: "Warm bioluminescent bays glowing electric blue.",
    category: "Adventure",
    beachCount: 29,
    imageSrc: "/Images/image21.png",
  },
  {
    id: "15",
    slug: "luxury-resorts",
    title: "Luxury resort beaches",
    description: "Cabanas, concierge, and champagne at the waterline.",
    category: "Luxury",
    beachCount: 76,
    imageSrc: "/Images/image20.png",
  },
  {
    id: "16",
    slug: "private-islands",
    title: "Private island beaches",
    description: "Your own slice of sand, sea, and silence.",
    category: "Luxury",
    beachCount: 41,
    imageSrc: "/Images/image22.png",
  },
  {
    id: "17",
    slug: "yoga-wellness",
    title: "Yoga and wellness",
    description: "Soft tides and sunrise salutations on the shore.",
    category: "Relaxation",
    beachCount: 91,
    imageSrc: "/Images/things-to-do.jpg",
  },
  {
    id: "18",
    slug: "sunset-viewing",
    title: "Sunset viewing",
    description: "West-facing bays painted in amber and rose.",
    category: "Relaxation",
    beachCount: 203,
    imageSrc: "/Images/image9.jpg",
  },
  {
    id: "19",
    slug: "calm-lagoons",
    title: "Calm lagoons",
    description: "Glass-still water perfect for floating and reading.",
    category: "Scenic",
    beachCount: 134,
    imageSrc: "/Images/exp2.png",
  },
  {
    id: "20",
    slug: "cliff-diving",
    title: "Cliff diving",
    description: "Adrenaline, deep water, and dramatic coastlines.",
    category: "Adventure",
    beachCount: 62,
    imageSrc: "/Images/image12.png",
  },
  {
    id: "21",
    slug: "dog-friendly",
    title: "Dog-friendly beaches",
    description: "Off-leash joy, fresh water stations, and wagging tails.",
    category: "Family",
    beachCount: 88,
    imageSrc: "/Images/nearbeaches1.jpg",
  },
  {
    id: "22",
    slug: "secluded-coves",
    title: "Secluded coves",
    description: "Nature-wrapped pockets you reach by boat or trail.",
    category: "Nature",
    beachCount: 121,
    imageSrc: "/Images/image5.png",
  },
  {
    id: "23",
    slug: "beach-clubs",
    title: "Beach clubs",
    description: "Daybeds, DJs, and curated cocktails steps from the sea.",
    category: "Lifestyle",
    beachCount: 154,
    imageSrc: "/Images/beachevents.png",
  },
  {
    id: "24",
    slug: "kitesurfing",
    title: "Kitesurfing spots",
    description: "Steady wind, wide bays, and endless airtime.",
    category: "Adventure",
    beachCount: 73,
    imageSrc: "/Images/exp3.png",
  },
];

const filterOrder: MoodCategory[] = [
  "All",
  "Lifestyle",
  "Relaxation",
  "Adventure",
  "Family",
  "Scenic",
  "Nature",
  "Luxury",
];

export function getMoodFilterTabs(): { category: MoodCategory; count: number }[] {
  const counts = new Map<MoodCategory, number>();
  for (const c of filterOrder) counts.set(c, 0);
  counts.set("All", beachMoodsCatalog.length);
  for (const m of beachMoodsCatalog) {
    counts.set(m.category, (counts.get(m.category) ?? 0) + 1);
  }
  return filterOrder.map((category) => ({
    category,
    count: counts.get(category) ?? 0,
  }));
}

export type TrendingMoodStatus = "trending" | "hot" | "chill";

/** Hero “Trending moods” row — full-bleed image cards (design mockup). */
export const trendingMoodsPreview: {
  slug: string;
  title: string;
  description: string;
  beachCount: number;
  imageSrc: string;
  status: TrendingMoodStatus;
  statusLabel: string;
}[] = [
  {
    slug: "hidden-beaches",
    title: "Hidden beaches",
    description: "Off-the-map coves away from the tourist trail.",
    beachCount: 184,
    imageSrc: "/Images/image14.png",
    status: "trending",
    statusLabel: "Trending",
  },
  {
    slug: "party-beaches",
    title: "Party beaches",
    description: "Sun, beats, and endless energy until sunrise.",
    beachCount: 96,
    imageSrc: "/Images/image8.png",
    status: "hot",
    statusLabel: "Hot",
  },
  {
    slug: "snorkeling-beaches",
    title: "Snorkeling spots",
    description: "Dive into kaleidoscopic coral reefs and marine life.",
    beachCount: 213,
    imageSrc: "/Images/imge1.png",
    status: "trending",
    statusLabel: "Trending",
  },
  {
    slug: "romantic-beaches",
    title: "Romantic beaches",
    description: "Golden hours made for two and quiet shorelines.",
    beachCount: 142,
    imageSrc: "/Images/image15.png",
    status: "chill",
    statusLabel: "Chill",
  },
];

/** Browse page 2×4 “featured moods” block (design mockup order). */
export const featuredMoodSlugs: readonly string[] = [
  "lgbtq-welcoming",
  "snorkeling-beaches",
  "nude-beaches",
  "accessible-beaches",
  "tropical-reefs",
  "black-sand-beaches",
  "waterfall-beaches",
  "night-swimming",
];

/** Optional display title on cards (e.g. “Snorkeling coves”). */
export const moodTitleDisplay: Partial<Record<string, string>> = {
  "snorkeling-beaches": "Snorkeling coves",
};

export function getMoodsBySlugs(slugs: readonly string[]): BeachMoodItem[] {
  return slugs
    .map((slug) => beachMoodsCatalog.find((m) => m.slug === slug))
    .filter((m): m is BeachMoodItem => Boolean(m));
}

/** “Explore by region” row — design mockup counts. */
export const exploreByRegionItems: {
  slug: string;
  name: string;
  beachCount: number;
  imageSrc: string;
}[] = [
  {
    slug: "mediterranean",
    name: "Mediterranean",
    beachCount: 320,
    imageSrc: "/Images/image15.png",
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    beachCount: 218,
    imageSrc: "/Images/image8.png",
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    beachCount: 445,
    imageSrc: "/Images/image14.png",
  },
  {
    slug: "pacific-islands",
    name: "Pacific Islands",
    beachCount: 156,
    imageSrc: "/Images/image22.png",
  },
  {
    slug: "indian-ocean",
    name: "Indian Ocean",
    beachCount: 189,
    imageSrc: "/Images/image13.png",
  },
  {
    slug: "americas",
    name: "Americas",
    beachCount: 274,
    imageSrc: "/Images/image11.png",
  },
];
