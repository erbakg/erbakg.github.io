import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const base = "https://example.com"; // replace post-deploy
  return [
    {
      url: `${base}/en`,
      lastModified: new Date(),
      alternates: { languages: { en: `${base}/en`, ru: `${base}/ru` } },
    },
    { url: `${base}/ru`, lastModified: new Date() },
  ];
};

export default sitemap;
