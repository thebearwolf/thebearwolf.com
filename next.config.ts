import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Temporary bridge redirect to https://www.bjornulf.com (HTTP 307).
      // Remove when realbearwolf.com gets its own new site.
      {
        source: "/:path*",
        has: [{ type: "host", value: "realbearwolf\\.com" }],
        destination: "https://www.bjornulf.com/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.realbearwolf\\.com" }],
        destination: "https://www.bjornulf.com/:path*",
        permanent: false,
      },
      { source: "/library/constructive-thermochemistry/ConstructiveThermochemistry-OstvikFeb26.pdf", destination: "/papers/constructive-thermochemistry.pdf", permanent: true },
      { source: "/library/resource-technology/Resource-Technology-Framework-Sep25.pdf", destination: "/papers/resource-technology.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
