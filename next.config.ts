import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.licdn.com"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;