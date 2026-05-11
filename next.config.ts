import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "**.license-market.ir" },
      { protocol: "https", hostname: "cdn.license-market.ir" },
    ],
  },
};

export default nextConfig;
