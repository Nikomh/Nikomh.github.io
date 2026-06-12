import { defineCollection, z } from 'astro:content';

const feldnotizen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    kategorie: z.string(),
    serie: z.string().optional().default(''),
    aktualisiert: z.coerce.date().optional(),
  }),
});

const gebaut = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.string().default('läuft produktiv'),
    gelernt: z.string().optional(),
    screenshot: z.string().optional(),
  }),
});

export const collections = { feldnotizen, gebaut };
