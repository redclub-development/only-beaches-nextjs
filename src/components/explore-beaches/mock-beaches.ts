import { beachImages } from "@/lib/beach-images";

export type ExploreBeachCard = {
  id: string;
  name: string;
  locationLine: string;
  imageSrc: string;
  tags: string[];
  tempF: number;
  waterCondition: string;
  waterQuality: string;
};

const bondi: Omit<ExploreBeachCard, "id"> = {
  name: "Bondi Beach",
  locationLine: "Sydney, Australia",
  imageSrc: beachImages.explore.beach1,
  tags: ["Surf", "Party", "Family Friendly"],
  tempF: 82,
  waterCondition: "Flat",
  waterQuality: "Excellent",
};

const veligandu: Omit<ExploreBeachCard, "id"> = {
  name: "Veligandu Island",
  locationLine: "North Ari Atoll, Maldives",
  imageSrc: beachImages.explore.beach2,
  tags: ["Snorkeling", "Secluded", "Clear Water"],
  tempF: 84,
  waterCondition: "Calm",
  waterQuality: "Optimal",
};

const whitehaven: Omit<ExploreBeachCard, "id"> = {
  name: "Whitehaven Beach",
  locationLine: "Whitsunday Island, Australia",
  imageSrc: beachImages.explore.beach3,
  tags: ["White Sand", "Family Friendly", "Calm Water"],
  tempF: 79,
  waterCondition: "Calm",
  waterQuality: "Excellent",
};

const conigli: Omit<ExploreBeachCard, "id"> = {
  name: "Spiaggia dei Conigli",
  locationLine: "Lampedusa, Italy",
  imageSrc: beachImages.explore.beach4,
  tags: ["Snorkeling", "Clear Water", "Secluded"],
  tempF: 81,
  waterCondition: "Calm",
  waterQuality: "Excellent",
};

const bases = [bondi, veligandu, whitehaven, conigli];

/** One sample beach per map cluster pin (hover preview card order). */
export const MAP_CLUSTER_HOVER_SAMPLES: Pick<
  ExploreBeachCard,
  "name" | "locationLine" | "imageSrc" | "tags"
>[] = [bases[0], bases[1], bases[2], bases[3], bases[0], bases[1]].map(
  (b) => ({
    name: b.name,
    locationLine: b.locationLine,
    imageSrc: b.imageSrc,
    tags: b.tags,
  }),
);

/** Full beach row per map cluster (click → detail drawer). */
export const MAP_CLUSTER_FULL_BEACHES: ExploreBeachCard[] = [0, 1, 2, 3, 0, 1].map(
  (bi, mapIdx) => ({
    id: `map-cluster-${mapIdx}`,
    ...bases[bi],
  }),
);

/** Intentionally duplicated rows for a dense grid like the design mock. */
export const MOCK_EXPLORE_BEACHES: ExploreBeachCard[] = Array.from(
  { length: 12 },
  (_, i) => ({
    id: `mock-${i}`,
    ...bases[i % bases.length],
  }),
);

export const EXPLORE_BEACH_FILTERS = [
  "White Sand",
  "Clear Water",
  "Surfing",
  "Snorkeling",
  "Secluded",
  "Family Friendly",
  "Party",
  "Calm Water",
  "Dog Friendly",
  "Accessible",
] as const;

export type ExploreBeachFilter = (typeof EXPLORE_BEACH_FILTERS)[number];
