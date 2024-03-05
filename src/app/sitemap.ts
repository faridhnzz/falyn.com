import type { MetadataRoute } from "next";

const addPathToBaseURL = (path: string) => `https://fayln.com${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/projects", "/contact"].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  return [...routes];
}
