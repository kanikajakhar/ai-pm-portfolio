import { writeFileSync } from "fs";

const baseUrl = "https://kanikajakhar.github.io/ai-pm-portfolio";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

writeFileSync("out/sitemap.xml", sitemap);
console.log("Sitemap generated.");
