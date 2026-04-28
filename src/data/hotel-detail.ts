import { beachImages } from "@/lib/beach-images";
import {
  getStayBySlug,
  staysNearBeachesCatalog,
  type StayCatalogEntry,
} from "@/data/stay-near-beaches-catalog";

const ACCENT = "#00CFC0";

export type HotelBadge = {
  label: string;
  variant: "solid" | "outline" | "yellow";
};

export type HotelRoom = {
  id: string;
  name: string;
  guests: string;
  beds: string;
  size: string;
  tags: string[];
  price: number;
  image: string;
  badge?: string;
  badgeVariant?: "cyan" | "orange";
  scarcity?: string;
};

export type HotelBeachNear = {
  name: string;
  image: string;
  timeLabel: string;
  conditions: { label: string; value: string }[];
  activities: string[];
};

export type HotelExperience = {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
};

export type HotelReview = {
  initial: string;
  name: string;
  meta: string;
  body: string;
  avatarClass: string;
};

export type HotelPolicy = {
  title: string;
  body: string;
};

export type HotelDetailData = {
  slug: string;
  accentHex: typeof ACCENT;
  /** Hero gallery */
  gallery: { main: string; top: string; bottom: string; photoCount: number };
  badges: HotelBadge[];
  /** e.g. "AZURE COVE" + accent "RESORT & SPA" — we use catalog name split */
  namePrefix: string;
  nameAccent: string;
  location: string;
  walkToBeach: string;
  categoryLine: string;
  ratingScore: string;
  ratingLabel: string;
  reviewCount: number;
  aboutKicker: string;
  aboutHeading: string;
  aboutHeadingAccent: string;
  aboutParagraphs: string[];
  features: { title: string; description: string }[];
  booking: {
    priceWas: number;
    priceNight: number;
    nights: number;
    checkIn: string;
    checkOut: string;
    guestsLabel: string;
    resortFee: number;
    taxes: number;
  };
  amenities: string[];
  amenitiesMoreCount: number;
  rooms: HotelRoom[];
  locationBlock: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    titleTrail: string;
    mapImage: string;
    pills: { highlight: string; rest: string }[];
  };
  beachesNear: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    titleTrail: string;
    beaches: HotelBeachNear[];
  };
  experiencesKicker: string;
  experiencesTitleLead: string;
  experiencesTitleAccent: string;
  experiences: HotelExperience[];
  reviewsKicker: string;
  reviewsTitleLead: string;
  reviewsTitleAccent: string;
  reviewsScore: string;
  reviewsLabel: string;
  reviewsCount: number;
  reviewDistribution: { stars: number; count: number }[];
  reviewsList: HotelReview[];
  policiesKicker: string;
  policiesTitleLead: string;
  policiesTitleAccent: string;
  policies: HotelPolicy[];
  similarKicker: string;
  similarTitleLead: string;
  similarTitleAccent: string;
  similarSlugs: string[];
  cta: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    body: string;
  };
  fromPrice: number;
  nightPrice: number;
  heroImage: string;
};

const galleryPool = [
  beachImages.home.stay1,
  beachImages.home.stay2,
  beachImages.home.stay3,
  beachImages.home.stay4,
  beachImages.home.stay5,
  beachImages.trending.diamond,
  beachImages.trending.fulhadhoo,
  beachImages.explore.beach1,
] as const;

function pickGallery(primary: string, slug: string): {
  main: string;
  top: string;
  bottom: string;
} {
  const rest = galleryPool.filter((u) => u !== primary);
  const h = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const t = rest[h % rest.length] ?? beachImages.explore.beach2;
  const b = rest[(h + 3) % rest.length] ?? beachImages.explore.beach3;
  return { main: primary, top: t, bottom: b };
}

function splitHotelName(name: string): { prefix: string; accent: string } {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return { prefix: name, accent: "" };
  const mid = Math.ceil(parts.length / 2);
  return {
    prefix: parts.slice(0, mid).join(" "),
    accent: parts.slice(mid).join(" "),
  };
}

function buildRichDetail(entry: StayCatalogEntry): HotelDetailData {
  const { prefix, accent } = splitHotelName(entry.name);
  const g = pickGallery(entry.src, entry.slug);
  const nights = 5;
  const resortFee = 75;
  const taxes = 180;
  const subtotal = entry.night * nights;

  const rooms: HotelRoom[] = [
    {
      id: "r1",
      name: "Ocean View Suite",
      guests: "2 guests",
      beds: "King bed",
      size: "52 m²",
      tags: ["Ocean view", "Balcony", "Rain shower"],
      price: entry.night,
      image: beachImages.explore.beach1,
      badge: "Most Popular",
      badgeVariant: "cyan",
    },
    {
      id: "r2",
      name: "Lagoon Deluxe Room",
      guests: "2 guests",
      beds: "Queen bed",
      size: "44 m²",
      tags: ["Lagoon view", "Plunge pool", "Butler"],
      price: Math.round(entry.night * 1.35),
      image: beachImages.explore.beach2,
    },
    {
      id: "r3",
      name: "Garden Family Villa",
      guests: "4 guests",
      beds: "2 Queens",
      size: "68 m²",
      tags: ["Garden", "Kids nook", "2 bathrooms"],
      price: Math.round(entry.night * 1.15),
      image: beachImages.explore.beach3,
      badge: "Beachfront",
      badgeVariant: "orange",
      scarcity: "Only 2 left",
    },
  ];

  const beachesNear: HotelBeachNear[] = [
    {
      name: "Silver Strand Beach",
      image: beachImages.trending.diamond,
      timeLabel: "4 min",
      conditions: [
        { label: "Water", value: "78°F" },
        { label: "Waves", value: "Calm" },
        { label: "Clarity", value: "Excellent" },
      ],
      activities: ["Swimming", "Sunrise walk", "Kayak"],
    },
    {
      name: "Harbor Cove",
      image: beachImages.trending.fulhadhoo,
      timeLabel: "12 min",
      conditions: [
        { label: "Water", value: "76°F" },
        { label: "Waves", value: "Gentle" },
        { label: "Clarity", value: "Very good" },
      ],
      activities: ["Paddleboard", "Shelling", "Picnic"],
    },
    {
      name: "Rockaway South",
      image: beachImages.home.nySouth,
      timeLabel: "22 min",
      conditions: [
        { label: "Water", value: "74°F" },
        { label: "Waves", value: "Moderate" },
        { label: "Clarity", value: "Good" },
      ],
      activities: ["Surf lessons", "Volleyball", "Food trucks"],
    },
  ];

  const experiences: HotelExperience[] = [
    {
      title: "Sunset sailing",
      subtitle: "12 min from stay",
      image: beachImages.home.sailMed,
      cta: "Book now →",
    },
    {
      title: "Guided snorkel",
      subtitle: "On-site partner",
      image: beachImages.home.snorkel,
      cta: "Explore →",
    },
    {
      title: "Beach club day pass",
      subtitle: "8 min walk",
      image: beachImages.moods.party,
      cta: "View passes →",
    },
    {
      title: "Coastal bike trail",
      subtitle: "Starts at lobby",
      image: beachImages.explore.beach4,
      cta: "See route →",
    },
  ];

  const reviewDistribution = [
    { stars: 5, count: 434 },
    { stars: 4, count: 261 },
    { stars: 3, count: 109 },
    { stars: 2, count: 20 },
    { stars: 1, count: 23 },
  ];

  const reviewsList: HotelReview[] = [
    {
      initial: "S",
      name: "Sophie M.",
      meta: "March 2025 · UK",
      body: "Immaculate rooms and the concierge team went above and beyond. We watched the sunrise from our balcony every morning — unforgettable.",
      avatarClass: "bg-orange-400",
    },
    {
      initial: "J",
      name: "James R.",
      meta: "February 2025 · US",
      body: "Great value for the location. Quick walk to the boardwalk and quieter than we expected at night. Would book again.",
      avatarClass: "bg-teal-500",
    },
    {
      initial: "A",
      name: "Aisha K.",
      meta: "January 2025 · UAE",
      body: "Kids loved the pool. Breakfast was fresh daily and staff remembered our names. Small gym but we barely used it.",
      avatarClass: "bg-amber-400",
    },
  ];

  const policies: HotelPolicy[] = [
    {
      title: "Check-in",
      body: "From 3:00 PM. Early check-in from 11:00 AM when available.",
    },
    {
      title: "Check-out",
      body: "Until 12:00 PM. Late check-out until 3:00 PM on request.",
    },
    {
      title: "Cancellation",
      body: "Free cancellation up to 48 hours before arrival for a full refund.",
    },
    {
      title: "Smoking",
      body: "Non-smoking rooms. Designated outdoor areas only.",
    },
    {
      title: "Pets",
      body: "Not allowed. Service animals welcome with prior notice.",
    },
    {
      title: "Children",
      body: "All ages welcome. Cribs on request · Kids’ activities nearby.",
    },
  ];

  const otherSlugs = staysNearBeachesCatalog
    .map((s) => s.slug)
    .filter((s) => s !== entry.slug);
  /** Repeat entries so the strip is long enough for horizontal hover auto-scroll */
  const similarSlugs =
    otherSlugs.length === 0
      ? []
      : [...otherSlugs, ...otherSlugs, ...otherSlugs];

  return {
    slug: entry.slug,
    accentHex: ACCENT,
    gallery: { ...g, photoCount: 28 },
    badges: [
      { label: "Beachfront", variant: "solid" },
      { label: "Top rated 2024", variant: "outline" },
      { label: "Best value", variant: "yellow" },
    ],
    namePrefix: prefix.toUpperCase(),
    nameAccent: (accent || "Resort & Spa").toUpperCase(),
    location: entry.place,
    walkToBeach: "2 min walk to beach",
    categoryLine: "Boutique stay · Est. 2018",
    ratingScore: entry.rating,
    ratingLabel: "Exceptional",
    reviewCount: entry.reviews,
    aboutKicker: "About this stay",
    aboutHeading: "A SANCTUARY",
    aboutHeadingAccent: "ABOVE THE SHORE",
    aboutParagraphs: [
      `Welcome to ${entry.name}. Floor-to-ceiling windows, curated local art, and beds dressed in crisp linens set the tone for a restorative escape.`,
      "Wake up to soft coastal light, sip coffee on your private balcony, and let our team handle the details — from airport transfers to dinner reservations steps from the sand.",
    ],
    features: [
      {
        title: "Private cabanas",
        description: "Reserved loungers and shade at partner beach clubs.",
      },
      {
        title: "Rooftop lounge",
        description: "Small plates, craft cocktails, and sunset DJ sets Fri–Sun.",
      },
      {
        title: "Chef-led breakfast",
        description: "Seasonal menu with vegan and gluten-free options daily.",
      },
      {
        title: "Wellness studio",
        description: "Yoga, meditation, and massage bookings on request.",
      },
    ],
    booking: {
      priceWas: Math.round(entry.night * 1.15),
      priceNight: entry.night,
      nights,
      checkIn: "2025-08-14",
      checkOut: "2025-08-19",
      guestsLabel: "2 adults · 0 children",
      resortFee,
      taxes,
    },
    amenities: [
      "Beach access",
      "Infinity pool",
      "Free high-speed WiFi",
      "Breakfast included",
      "Spa & wellness",
      "Snorkel gear",
    ],
    amenitiesMoreCount: 18,
    rooms,
    locationBlock: {
      kicker: "Location",
      titleLead: "FIND",
      titleAccent: "YOUR WAY TO",
      titleTrail: "THE COAST",
      mapImage: beachImages.mapPanel,
      pills: [
        { highlight: "2 min", rest: "walk to main beach" },
        { highlight: "25 min", rest: "from regional airport" },
        { highlight: "30 m", rest: "to snorkel reef" },
        { highlight: "8 km", rest: "to downtown" },
      ],
    },
    beachesNear: {
      kicker: "Beaches near this stay",
      titleLead: "YOUR",
      titleAccent: "BEACH PLAYGROUND",
      titleTrail: "AWAITS",
      beaches: beachesNear,
    },
    experiencesKicker: "Things to do nearby",
    experiencesTitleLead: "NEARBY",
    experiencesTitleAccent: "EXPERIENCES",
    experiences,
    reviewsKicker: "Community reviews",
    reviewsTitleLead: "WHAT GUESTS",
    reviewsTitleAccent: "LOVE",
    reviewsScore: entry.rating,
    reviewsLabel: "Exceptional",
    reviewsCount: entry.reviews,
    reviewDistribution,
    reviewsList,
    policiesKicker: "Policies",
    policiesTitleLead: "GOOD TO",
    policiesTitleAccent: "KNOW",
    policies,
    similarKicker: "Similar stays",
    similarTitleLead: "YOU MAY ALSO",
    similarTitleAccent: "LOVE THESE",
    similarSlugs,
    cta: {
      kicker: "Your beach escape awaits",
      titleLead: "READY TO BOOK YOUR",
      titleAccent: "BEACH GATEWAY?",
      body: "Join millions of travellers who found their perfect stay through OnlyBeaches. Reserve in under two minutes.",
    },
    fromPrice: entry.from,
    nightPrice: entry.night,
    heroImage: entry.src,
  };
}

export function getHotelDetail(slug: string): HotelDetailData | undefined {
  const entry = getStayBySlug(slug);
  if (!entry) return undefined;
  return buildRichDetail(entry);
}

export function allHotelSlugs(): string[] {
  return staysNearBeachesCatalog.map((s) => s.slug);
}
