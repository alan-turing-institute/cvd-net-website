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
    draft: z.boolean().default(false)
  }),
});

// Define the events collection that supports both events and news
const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['event', 'news']),
    description: z.string(),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
    
    // Event-specific fields
    date: z.date().optional(),
    endDate: z.date().optional(),
    dateDisplay: z.string().optional(),
    location: z.string().optional(),
    links: z.array(z.object({
      text: z.string(),
      url: z.string().url()
    })).optional(),
    
    // News-specific fields  
    publishDate: z.date().optional(),
    author: z.string().optional(),
  }).refine((data) => {
    if (data.type === 'event') {
      return data.date !== undefined && data.dateDisplay !== undefined;
    }
    if (data.type === 'news') {
      return data.publishDate !== undefined;
    }
    return false;
  }, {
    message: "Events must have 'date' and 'dateDisplay'. News items must have 'publishDate'."
  })
});

// Export all collections
export const collections = {
  blog,
  events
};
