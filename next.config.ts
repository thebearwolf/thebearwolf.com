import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/library/constructive-thermochemistry/ConstructiveThermochemistry-OstvikFeb26.pdf", destination: "/papers/constructive-thermochemistry.pdf", permanent: true },
      { source: "/library/resource-technology/Resource-Technology-Framework-Sep25.pdf", destination: "/papers/resource-technology.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
