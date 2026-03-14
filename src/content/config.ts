import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.any(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.any(),
    summary: z.string(),
    type: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
