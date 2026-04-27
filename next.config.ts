import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16+ requires explicit qualities when using non-default values (e.g. hero-search quality={90})
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
