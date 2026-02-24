import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://realbearwolf.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/story`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/building`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/library`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/connect`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resource-technology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/constructive-thermochemistry`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
