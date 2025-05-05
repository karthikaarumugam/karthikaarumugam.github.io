import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = "portfolio"; // your subfolder/repo name

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  images: {
    domains: ["media.licdn.com"],
  },
};

export default nextConfig;