import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["media.licdn.com"],
    unoptimized: true,
  },
};

export default nextConfig;