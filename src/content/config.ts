import { defineCollection, z } from "astro:content";

const postColletion = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()),
    heroImage: z.string(),
  }),
});

export const collections = {
  posts: postColletion,
};
