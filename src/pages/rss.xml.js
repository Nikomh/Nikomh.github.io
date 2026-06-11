import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notizen = (await getCollection('feldnotizen')).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: 'Feldnotizen — Nikolay',
    description: 'Beobachtungen aus der Arbeit mit KI und Menschen.',
    site: context.site,
    items: notizen.map((n) => ({
      title: n.data.title,
      description: n.data.description,
      pubDate: n.data.date,
      link: `/feldnotizen/${n.slug}/`,
    })),
  });
}
