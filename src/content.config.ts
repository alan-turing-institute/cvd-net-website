import { defineCollection, z } from 'astro:content';

// Define the schema for the blog collection
const blog = defineCollection({
  type: 'content', // Use 'content' for Markdown files with frontmatter
  schema: ({ image }) => z.object({ 
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    author: z.string().optional(), 
    coverImage: image().optional(),
  }),
});

// Export all collections
export const collections = {
  blog,
  // Add other future collections here
};
