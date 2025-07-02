import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ["media.licdn.com"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;