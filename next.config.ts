import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/library/resource-technology", destination: "/library", permanent: false },
      { source: "/library/constructive-thermochemistry", destination: "/library", permanent: false },
    ];
  },
};

export default nextConfig;
