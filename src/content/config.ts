import { defineCollection, z } from "astro:content";

// zod sqchema

const characters = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    age: z.number(),
    description: z.string(),
  }),
});

export const collections = { characters };
