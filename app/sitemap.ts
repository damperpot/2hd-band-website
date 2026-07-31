import type { MetadataRoute } from "next";
import { serviceAreas } from "@/data/areas";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      changeFrequency: "weekly",
      priority: 1
    },
    ...serviceAreas.map((area) => ({
      url: `${site.domain}/cover-band/${area.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
