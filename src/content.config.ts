import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the schema for the blog collection
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({ 
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    author: z.string().optional(), 
    coverImage: image().optional(),
  }),
});

// Define the schema for events collection
const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    dateDisplay: z.string(),
    location: z.string().optional(),
    type: z.enum(['event', 'workshop', 'conference', 'summer-school', 'news']),
    description: z.string(),
    excerpt: z.string().optional(),
    links: z.array(z.object({
      text: z.string(),
      url: z.string().url()
    })).optional(),
    draft: z.boolean().default(false)
  })
});

// Export all collections
export const collections = {
  blog,
  events
};
