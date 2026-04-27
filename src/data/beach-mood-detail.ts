import {
  beachMoodsCatalog,
  moodTitleDisplay,
  type BeachMoodItem,
  type MoodCategory,
} from "@/data/beach-moods-catalog";

/** Short homepage slugs → canonical catalog slugs */
export const moodSlugAliases: Record<string, string> = {
  party: "party-beaches",
  surf: "surf-beaches",
  hidden: "hidden-beaches",
  family: "family-beaches",
  "lgbtq-friendly": "lgbtq-welcoming",
  bikini: "white-sand-beaches",
};

export function resolveMoodCatalogSlug(slug: string): string | null {
  const canonical = moodSlugAliases[slug] ?? slug;
  return beachMoodsCatalog.some((m) => m.slug === canonical) ? canonical : null;
}

export type MoodPlaceKind = "Beach" | "Island" | "Sea cave" | "Lagoon" | "Cove";

export type MoodDetailBeach = {
  id: string;
  name: string;
  nameAccentWord: string;
  location: string;
  imageSrc: string;
  placeKind: MoodPlaceKind;
  /** e.g. "#1 Hidden" — rank + short tag on the card image */
  rankPill: string;
  tempC: number;
  crowd: "Low" | "Mid" | "High";
  waterLabel: string;
  traits: readonly string[];
};

export type MoodEditorPick = {
  id: string;
  name: string;
  nameAccentWord: string;
  location: string;
  imageSrc: string;
  tempC: number;
  waterLabel: string;
  qualityLabel: string;
};

export type MoodDetailHeroStats = {
  beachCountLabel: string;
  bestSeason: string;
  topRegion: string;
  avgCrowd: "Low" | "Mid" | "High";
};

export type HeroDescSegment = { text: string; bold?: boolean };

export type MoodDetailPageData = {
  mood: BeachMoodItem;
  /** Plain fallback / SEO */
  heroDescription: string;
  heroSegments: readonly HeroDescSegment[];
  heroStats: MoodDetailHeroStats;
  gridBeaches: MoodDetailBeach[];
  editorPicks: MoodEditorPick[];
  relatedMoods: BeachMoodItem[];
};

const defaultStatsByCategory: Record<
  Exclude<MoodCategory, "All">,
  Partial<MoodDetailHeroStats>
> = {
  Lifestyle: { bestSeason: "APR–SEP", topRegion: "EU MED", avgCrowd: "Mid" },
  Relaxation: { bestSeason: "YEAR-ROUND", topRegion: "IND OCEAN", avgCrowd: "Mid" },
  Adventure: { bestSeason: "MAY–OCT", topRegion: "SE ASIA", avgCrowd: "Low" },
  Family: { bestSeason: "JUN–AUG", topRegion: "CARIBBEAN", avgCrowd: "Mid" },
  Scenic: { bestSeason: "MAY–OCT", topRegion: "SE ASIA", avgCrowd: "Low" },
  Nature: { bestSeason: "NOV–APR", topRegion: "PACIFIC", avgCrowd: "Mid" },
  Luxury: { bestSeason: "NOV–MAR", topRegion: "CARIBBEAN", avgCrowd: "High" },
};

const beachPool: Omit<MoodDetailBeach, "id" | "rankPill">[] = [
  {
    name: "Nyang",
    nameAccentWord: "Nyang",
    location: "Bali, Indonesia",
    imageSrc: "/Images/image14.png",
    placeKind: "Beach",
    tempC: 28,
    crowd: "Mid",
    waterLabel: "Excellent",
    traits: ["Isolated", "White sand", "Cliffside"],
  },
  {
    name: "Fulhadhoo",
    nameAccentWord: "Fulhadhoo",
    location: "Baa Atoll, Maldives",
    imageSrc: "/Images/image13.png",
    placeKind: "Island",
    tempC: 29,
    crowd: "Low",
    waterLabel: "Excellent",
    traits: ["Turquoise", "Snorkel", "Quiet"],
  },
  {
    name: "Navagio",
    nameAccentWord: "Navagio",
    location: "Zakynthos, Greece",
    imageSrc: "/Images/image12.png",
    placeKind: "Sea cave",
    tempC: 26,
    crowd: "High",
    waterLabel: "Crystal",
    traits: ["Cliff", "Boat access", "Iconic"],
  },
  {
    name: "Pink",
    nameAccentWord: "Sands",
    location: "Harbour Island, Bahamas",
    imageSrc: "/Images/image15.png",
    placeKind: "Beach",
    tempC: 27,
    crowd: "Mid",
    waterLabel: "Excellent",
    traits: ["Pink sand", "Swim", "Resorts nearby"],
  },
  {
    name: "El Nido",
    nameAccentWord: "Lagoon",
    location: "Palawan, Philippines",
    imageSrc: "/Images/imge1.png",
    placeKind: "Lagoon",
    tempC: 30,
    crowd: "Mid",
    waterLabel: "Excellent",
    traits: ["Karst", "Kayak", "Hidden"],
  },
  {
    name: "Tulum",
    nameAccentWord: "Shore",
    location: "Quintana Roo, Mexico",
    imageSrc: "/Images/image8.png",
    placeKind: "Beach",
    tempC: 31,
    crowd: "High",
    waterLabel: "Good",
    traits: ["Ruins", "Bars", "Diving"],
  },
  {
    name: "Anse",
    nameAccentWord: "Source d'Argent",
    location: "La Digue, Seychelles",
    imageSrc: "/Images/image5.png",
    placeKind: "Beach",
    tempC: 28,
    crowd: "High",
    waterLabel: "Excellent",
    traits: ["Boulders", "Shallow", "Photo"],
  },
  {
    name: "Pfeiffer",
    nameAccentWord: "Beach",
    location: "Big Sur, USA",
    imageSrc: "/Images/image2.jpg",
    placeKind: "Cove",
    tempC: 18,
    crowd: "Mid",
    waterLabel: "Cold",
    traits: ["Keyhole", "Purple sand", "Drama"],
  },
  {
    name: "Grace",
    nameAccentWord: "Bay",
    location: "Providenciales, TCI",
    imageSrc: "/Images/image6.png",
    placeKind: "Beach",
    tempC: 29,
    crowd: "Mid",
    waterLabel: "Excellent",
    traits: ["Calm", "Family", "Snorkel"],
  },
  {
    name: "Railay",
    nameAccentWord: "West",
    location: "Krabi, Thailand",
    imageSrc: "/Images/image11.png",
    placeKind: "Beach",
    tempC: 30,
    crowd: "High",
    waterLabel: "Good",
    traits: ["Climbing", "Longtail", "Sunset"],
  },
  {
    name: "Boulders",
    nameAccentWord: "Beach",
    location: "Cape Town, South Africa",
    imageSrc: "/Images/image7.png",
    placeKind: "Beach",
    tempC: 22,
    crowd: "Mid",
    waterLabel: "Cold",
    traits: ["Penguins", "Accessible", "Scenic"],
  },
  {
    name: "Lanikai",
    nameAccentWord: "Beach",
    location: "Oahu, Hawaii",
    imageSrc: "/Images/image9.jpg",
    placeKind: "Beach",
    tempC: 27,
    crowd: "High",
    waterLabel: "Excellent",
    traits: ["Mokulua", "Kayak", "Soft sand"],
  },
];

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

function moodKeyword(mood: BeachMoodItem): string {
  const t = moodTitleDisplay[mood.slug] ?? mood.title;
  return t.split(/\s+/)[0] ?? t;
}

function locationTail(location: string): string {
  const parts = location.split(",").map((s) => s.trim());
  return parts[parts.length - 1] || location;
}

function rotatePool(slug: string, mood: BeachMoodItem): MoodDetailBeach[] {
  const start = hashSlug(slug) % beachPool.length;
  const kw = moodKeyword(mood);
  const out: MoodDetailBeach[] = [];
  for (let i = 0; i < beachPool.length; i++) {
    const row = beachPool[(start + i) % beachPool.length];
    const rankPill =
      i % 2 === 0
        ? `#${i + 1} ${kw}`
        : `#${i + 1} ${locationTail(row.location)}`;
    out.push({
      ...row,
      id: `${slug}-${i}`,
      rankPill,
    });
  }
  return out;
}

function heroSegmentsFor(mood: BeachMoodItem): readonly HeroDescSegment[] {
  if (mood.slug === "hidden-beaches") {
    return [
      { text: "Discover " },
      { text: "secluded shores", bold: true },
      {
        text: " and untouched coastlines — quiet coves, dramatic cliffs, and water you can see through. We curate each listing for crowd, clarity, and that off-the-brochure feeling so you can line up ",
      },
      { text: "every vibe", bold: true },
      { text: " before wheels up." },
    ] as const;
  }
  const t = moodTitleDisplay[mood.slug] ?? mood.title;
  return [
    { text: mood.description },
    {
      text: ` Save spots, compare conditions, and plan around what makes ${t.toLowerCase()} special.`,
    },
  ] as const;
}

function splitHeroTitle(title: string): { before: string; accent: string } {
  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return { before: title, accent: "" };
  const accent = parts.pop()!;
  return { before: parts.join(" "), accent };
}

function relatedForSlug(slug: string, n: number): BeachMoodItem[] {
  const idx = beachMoodsCatalog.findIndex((m) => m.slug === slug);
  const others = beachMoodsCatalog.filter((m) => m.slug !== slug);
  if (idx < 0) return others.slice(0, n);
  const rotated = [...others.slice(idx % others.length), ...others.slice(0, idx % others.length)];
  return rotated.slice(0, n);
}

export function getMoodDetailPageData(slug: string): MoodDetailPageData | null {
  const canonical = resolveMoodCatalogSlug(slug);
  if (!canonical) return null;
  const mood = beachMoodsCatalog.find((m) => m.slug === canonical);
  if (!mood) return null;

  const defaults = defaultStatsByCategory[mood.category];
  const heroStats: MoodDetailHeroStats = {
    beachCountLabel: String(mood.beachCount),
    bestSeason: defaults.bestSeason ?? "YEAR-ROUND",
    topRegion: defaults.topRegion ?? "GLOBAL",
    avgCrowd: defaults.avgCrowd ?? "Mid",
  };

  const heroDescription =
    mood.description.length > 90
      ? mood.description
      : `${mood.description} Discover hand-picked shores that match this vibe — from crowd levels to water clarity — so you can plan with confidence.`;

  const heroSegments = heroSegmentsFor(mood);
  const gridBeaches = rotatePool(canonical, mood);
  const waterLabels = ["Glassy", "Flat", "Excellent"] as const;
  const picks = gridBeaches.slice(0, 3).map((b, i) => ({
    id: `pick-${b.id}`,
    name: b.name,
    nameAccentWord: b.nameAccentWord,
    location: b.location,
    imageSrc: b.imageSrc,
    tempC: b.tempC,
    waterLabel: waterLabels[i % 3],
    qualityLabel: "Excellent",
  }));

  return {
    mood,
    heroDescription,
    heroSegments,
    heroStats,
    gridBeaches,
    editorPicks: picks,
    relatedMoods: relatedForSlug(canonical, 4),
  };
}

export function moodPageTitle(mood: BeachMoodItem): string {
  return moodTitleDisplay[mood.slug] ?? mood.title;
}

export function moodHeroTitleParts(mood: BeachMoodItem): { before: string; accent: string } {
  const display = moodPageTitle(mood);
  return splitHeroTitle(display);
}
