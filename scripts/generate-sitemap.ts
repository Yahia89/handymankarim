import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  const pages = await globby([
    'app/**/*.tsx',
    '!app/**/_*.tsx',
    '!app/**/layout.tsx',
    '!app/**/error.tsx',
    '!app/**/loading.tsx',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('app', '')
            .replace('/page.tsx', '')
            .replace('.tsx', '');
          return `
            <url>
              <loc>https://handymankarim.com${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
}

generate();