/** Mock data for the “Beaches near you” marketing page (Los Angeles area). */

export type NearbyBeachCard = {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  imageSrc: string;
  categories: readonly string[];
  tempF: number;
  wavesLabel: string;
  qualityLabel: string;
  features: readonly string[];
};

export const nearbyHeroStats = {
  beachCount: 24,
  closestKm: 3.2,
  avgWaterTempC: 28,
  todayWeatherC: 26,
} as const;

export const nearbyLocationLabel = "Los Angeles, CA";

export const nearbyBeachResults: NearbyBeachCard[] = [
  {
    id: "1",
    name: "El Matador Beach",
    location: "Malibu, CA",
    distanceKm: 3.2,
    imageSrc: "/Images/image14.png",
    categories: ["Scenic", "Sea caves"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Pier", "Boardwalk"],
  },
  {
    id: "2",
    name: "Venice Beach",
    location: "Venice, CA",
    distanceKm: 13.1,
    imageSrc: "/Images/image8.png",
    categories: ["Culture", "Surf"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Culture", "Art"],
  },
  {
    id: "3",
    name: "Hermosa Beach",
    location: "Hermosa Beach, CA",
    distanceKm: 18.6,
    imageSrc: "/Images/image11.png",
    categories: ["Family", "Volleyball"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Volleyball", "Calm"],
  },
  {
    id: "4",
    name: "Leo Carrillo Beach",
    location: "Malibu, CA",
    distanceKm: 22.3,
    imageSrc: "/Images/image5.png",
    categories: ["Scenic", "Secluded"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Secluded", "Caves"],
  },
  {
    id: "5",
    name: "Manhattan Beach",
    location: "Manhattan Beach, CA",
    distanceKm: 24.5,
    imageSrc: "/Images/image6.png",
    categories: ["Surf", "Family"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Surf", "Clean sand"],
  },
  {
    id: "6",
    name: "Crystal Cove",
    location: "Newport Beach, CA",
    distanceKm: 24.0,
    imageSrc: "/Images/imge1.png",
    categories: ["Snorkel", "Scenic"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Snorkeling", "Clear"],
  },
  {
    id: "7",
    name: "Thousand Steps Beach",
    location: "Laguna Beach, CA",
    distanceKm: 23.8,
    imageSrc: "/Images/image12.png",
    categories: ["Hidden", "Cliffside"],
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Hidden", "Cliffside"],
  },
  {
    id: "8",
    name: "Zuma Beach",
    location: "Malibu, CA",
    distanceKm: 15.4,
    imageSrc: "/Images/image9.jpg",
    categories: ["Family", "Wide sand"],
    tempF: 81,
    wavesLabel: "Gentle",
    qualityLabel: "Excellent",
    features: ["Lifeguards", "Parking"],
  },
  {
    id: "9",
    name: "Playa del Rey Beach",
    location: "Playa del Rey, CA",
    distanceKm: 11.2,
    imageSrc: "/Images/exp4.png",
    categories: ["Calm", "Birding"],
    tempF: 81,
    wavesLabel: "Flat",
    qualityLabel: "Very good",
    features: ["Wetlands", "Bike path"],
  },
  {
    id: "9b",
    name: "Santa Monica Beach",
    location: "Santa Monica, CA",
    distanceKm: 16.8,
    imageSrc: "/Images/exp1.png",
    categories: ["Pier", "Bike path"],
    tempF: 80,
    wavesLabel: "Light chop",
    qualityLabel: "Very good",
    features: ["Pier", "Sunset"],
  },
  {
    id: "10",
    name: "Coronado Beach",
    location: "Coronado, CA",
    distanceKm: 195,
    imageSrc: "/Images/image13.png",
    categories: ["Family", "Calm"],
    tempF: 78,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Wide", "Sparkle sand"],
  },
  {
    id: "11",
    name: "La Jolla Cove",
    location: "La Jolla, CA",
    distanceKm: 182,
    imageSrc: "/Images/image15.png",
    categories: ["Snorkel", "Seals"],
    tempF: 76,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    features: ["Wildlife", "Clear"],
  },
  {
    id: "12",
    name: "Torrey Pines",
    location: "San Diego, CA",
    distanceKm: 198,
    imageSrc: "/Images/exp2.png",
    categories: ["Hike", "Scenic"],
    tempF: 75,
    wavesLabel: "Mellow",
    qualityLabel: "Excellent",
    features: ["Bluffs", "Trails"],
  },
];

export type NearbyWeekendPick = {
  id: string;
  name: string;
  location: string;
  imageSrc: string;
  distanceKm: number;
  tempF: number;
  wavesLabel: string;
  qualityLabel: string;
  tags: readonly string[];
};

export const weekendPicks: NearbyWeekendPick[] = [
  {
    id: "w1",
    name: "El Matador Secret Co...",
    location: "Malibu, CA",
    imageSrc: "/Images/image14.png",
    distanceKm: 4.1,
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    tags: ["Surf", "Clean sand"],
  },
  {
    id: "w2",
    name: "Paradise Cove",
    location: "Malibu, CA",
    imageSrc: "/Images/image22.png",
    distanceKm: 5.2,
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    tags: ["Calm", "Resort"],
  },
  {
    id: "w3",
    name: "Point Dume",
    location: "Malibu, CA",
    imageSrc: "/Images/image2.jpg",
    distanceKm: 6.0,
    tempF: 81,
    wavesLabel: "Light",
    qualityLabel: "Excellent",
    tags: ["Hike", "Views"],
  },
  {
    id: "w4",
    name: "Carbon Beach",
    location: "Malibu, CA",
    imageSrc: "/Images/image20.png",
    distanceKm: 4.8,
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    tags: ["Quiet", "Sunset"],
  },
  {
    id: "w5",
    name: "Zuma Beach",
    location: "Malibu, CA",
    imageSrc: "/Images/image9.jpg",
    distanceKm: 4.1,
    tempF: 82,
    wavesLabel: "Flat",
    qualityLabel: "Excellent",
    tags: ["Family", "Wide sand"],
  },

];

export type NearbyExperience = {
  id: string;
  activityTag: string;
  tagClass: string;
  title: string;
  distanceKm: number;
  priceLabel: string;
  imageSrc: string;
};

export const nearbyExperiences: NearbyExperience[] = [
  {
    id: "e1",
    activityTag: "Surf",
    tagClass: "bg-teal-500/95 text-white",
    title: "Malibu Surf School",
    distanceKm: 4.2,
    priceLabel: "From $65/hr",
    imageSrc: "/Images/image11.png",
  },
  {
    id: "e2",
    activityTag: "Snorkel",
    tagClass: "bg-sky-600/95 text-white",
    title: "Pacific Snorkel Tours",
    distanceKm: 8.1,
    priceLabel: "From $89/trip",
    imageSrc: "/Images/imge1.png",
  },
  {
    id: "e3",
    activityTag: "Kayak",
    tagClass: "bg-amber-500/95 text-white",
    title: "Marina Kayak Rentals",
    distanceKm: 12.4,
    priceLabel: "From $45/hr",
    imageSrc: "/Images/exp3.png",
  },
  {
    id: "e4",
    activityTag: "Surf",
    tagClass: "bg-teal-500/95 text-white",
    title: "Venice Boardwalk Lessons",
    distanceKm: 13.1,
    priceLabel: "From $55/hr",
    imageSrc: "/Images/image8.png",
  },
  {
    id: "e5",
    activityTag: "Hike",
    tagClass: "bg-teal-500/95 text-white",
    title: "Torrey Pines Hike",
    distanceKm: 13.1,
    priceLabel: "From $55/hr",
    imageSrc: "/Images/exp2.png",
  },
];

export type NearbyStay = {
  id: string;
  name: string;
  distanceLine: string;
  priceFrom: number;
  priceNight: number;
  rating: number;
  reviewCount: number;
  imageSrc: string;
};

export const nearbyStays: NearbyStay[] = [
  {
    id: "s1",
    name: "Nobu Hotel Malibu",
    distanceLine: "3.8 km to El Matador beach",
    priceFrom: 1250,
    priceNight: 1250,
    rating: 4.9,
    reviewCount: 892,
    imageSrc: "/Images/nearbeaches1.jpg",
  },
  {
    id: "s2",
    name: "Malibu Beach Inn",
    distanceLine: "2.1 km to Carbon Beach",
    priceFrom: 890,
    priceNight: 890,
    rating: 4.8,
    reviewCount: 412,
    imageSrc: "/Images/nearbeaches2.jpg",
  },
  {
    id: "s3",
    name: "Shutters on the Beach",
    distanceLine: "0.4 km to Santa Monica beach",
    priceFrom: 720,
    priceNight: 720,
    rating: 4.7,
    reviewCount: 1203,
    imageSrc: "/Images/nearbeaches3.jpg",
  },
  {
    id: "s4",
    name: "Casa Del Mar",
    distanceLine: "0.5 km to Santa Monica beach",
    priceFrom: 680,
    priceNight: 680,
    rating: 4.6,
    reviewCount: 756,
    imageSrc: "/Images/nearbeaches4.jpg",
  },
  {
    id: "s5",
    name: "Loews Santa Monica",
    distanceLine: "0.3 km to Santa Monica beach",
    priceFrom: 540,
    priceNight: 540,
    rating: 4.5,
    reviewCount: 2104,
    imageSrc: "/Images/nearbeaches5.jpg",
  },
];
