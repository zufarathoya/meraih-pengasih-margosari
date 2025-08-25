import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
      image: image(),
    }),
});

export const collections = {
  posts: blogCollection,
};
