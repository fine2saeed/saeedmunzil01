import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './site';

// Articles live in src/content/articles/ur/*.md and src/content/articles/en/*.md.
// The file name is the URL: ur/iqbal-concept-of-khudi.md → /articles/iqbal-concept-of-khudi/
// Give the Urdu and English versions the same file name so they link to each other.
const articles = defineCollection({
  loader: glob({ pattern: '{ur,en}/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),          // 1–2 sentences; shown on cards and in Google results
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    hero: z.string().default('📖'),   // emoji shown on the card
    image: z.string().optional(),     // optional share image, e.g. /assets/khudi.jpg (1200×630)
    featured: z.boolean().default(false),
    draft: z.boolean().default(false), // true = not published
  }),
});

export const collections = { articles };
