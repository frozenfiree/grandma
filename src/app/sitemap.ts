import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";

const BASE = "https://www.grandmashive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(ROUTES).map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
