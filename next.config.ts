import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-pm-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
