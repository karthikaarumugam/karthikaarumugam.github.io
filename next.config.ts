import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["media.licdn.com"],
  },
};

export default nextConfig;