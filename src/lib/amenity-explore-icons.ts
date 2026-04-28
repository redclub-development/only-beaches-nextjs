/**
 * SVGs in /public/explore-beaches. Keys describe the amenity; the iconN file is aligned to that same row.
 * Shared by the explore map detail drawer and the view-full “What’s On-Site” grid.
 */
export const exploreAmenitySvg = {
  parking: "/explore-beaches/icon6.svg",
  showers: "/explore-beaches/icon8.svg",
  restrooms: "/explore-beaches/icon7.svg",
  lifeguard: "/explore-beaches/icon9.svg",
  beachBars: "/explore-beaches/icon16.svg",
  surfSchools: "/explore-beaches/icons.svg",
  beachShops: "/explore-beaches/icon17.svg",
  firstAid: "/explore-beaches/icon18.svg",
  dogsOk: "/explore-beaches/icon10.svg",
  accessible: "/explore-beaches/icon11.svg",
  fireShows: "/explore-beaches/icon12.svg",
  publicWifi: "/explore-beaches/icon13.svg",
} as const;

export const onSiteFacilities = [
  { name: "Parking" as const, icon: exploreAmenitySvg.parking },
  { name: "Showers" as const, icon: exploreAmenitySvg.showers },
  { name: "Restrooms" as const, icon: exploreAmenitySvg.restrooms },
  { name: "Lifeguard" as const, icon: exploreAmenitySvg.lifeguard },
  { name: "Beach Bars" as const, icon: exploreAmenitySvg.beachBars },
  { name: "Surf Schools" as const, icon: exploreAmenitySvg.surfSchools },
  { name: "Beach Shops" as const, icon: exploreAmenitySvg.beachShops },
  { name: "First Aid" as const, icon: exploreAmenitySvg.firstAid },
  { name: "Dogs OK" as const, icon: exploreAmenitySvg.dogsOk },
  { name: "Accessible" as const, icon: exploreAmenitySvg.accessible },
  { name: "Fire Shows" as const, icon: exploreAmenitySvg.fireShows },
  { name: "Public WiFi" as const, icon: exploreAmenitySvg.publicWifi },
] as const;

/** Subset shown in the explore map beach drawer (Amenities) — same icons and labels as on-site. */
export const mapDrawerAmenities = [
  { name: "Parking" as const, icon: exploreAmenitySvg.parking },
  { name: "Showers" as const, icon: exploreAmenitySvg.showers },
  { name: "Restrooms" as const, icon: exploreAmenitySvg.restrooms },
  { name: "Lifeguard" as const, icon: exploreAmenitySvg.lifeguard },
  { name: "Dogs OK" as const, icon: exploreAmenitySvg.dogsOk },
  { name: "Accessible" as const, icon: exploreAmenitySvg.accessible },
] as const;
