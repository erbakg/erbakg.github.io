import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  const base = "https://erbakg.github.io";
  return [
    {
      url: `${base}/en/`,
      lastModified: new Date(),
      alternates: { languages: { en: `${base}/en/`, ru: `${base}/ru/` } },
    },
    { url: `${base}/ru/`, lastModified: new Date() },
  ];
};

export default sitemap;
