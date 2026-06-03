import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Trailing slashes for proper routing
  trailingSlash: true,
};

export default nextConfig;
