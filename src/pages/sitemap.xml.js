import { getCollection } from 'astro:content';

export async function GET(context) {
  const base = context.site?.href ?? 'https://nikolay-baut.de/';
  const statisch = ['', 'feldnotizen/', 'gebaut/', 'werkzeuge/', 'ueber-mich/', 'selbst-check/'];
  const notizen = await getCollection('feldnotizen');
  const builds = await getCollection('gebaut');
  const urls = [
    ...statisch.map((p) => base + p),
    ...notizen.map((n) => `${base}feldnotizen/${n.slug}/`),
    ...builds.map((b) => `${base}gebaut/${b.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${u}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
