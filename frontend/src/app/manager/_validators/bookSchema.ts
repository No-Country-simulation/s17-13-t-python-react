import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string().min(3, 'Requerido'),
  description: z.string().min(3, 'Requerido'),
  img: z.string().min(3, 'Requerido'),
  genre_id: z.string().min(1, 'Requerido'),
  author_id: z.string().min(1, 'Requerido'),
});

export type BookValues = z.infer<typeof bookSchema>;
