import type { MetadataRoute } from "next";

const siteUrl = "https://ronitdholwani.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/experiences",
    "/certifications",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}