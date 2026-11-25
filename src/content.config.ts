import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Resources (blog) articles. Each file is original content written for this
 * site. `sources` lists the public references used for any factual claim.
 * A Spanish version would live in src/content/resources-es/ with `translationOf`.
 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string().max(170),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    photo: z.string(),
    photoAlt: z.string(),
    relatedServices: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
