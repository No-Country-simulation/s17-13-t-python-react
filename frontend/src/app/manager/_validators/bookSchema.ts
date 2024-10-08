import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string().min(3, 'Requerido'),
  description: z.string().min(3, 'Requerido'),
  img: z.string().min(3, 'Requerido'),
  pages: z.string().min(1, 'Requerido'),
  publisher: z.string().min(1, 'Requerido'),
  genre_id: z.string().min(1, 'Requerido'),
  author_id: z.string().min(1, 'Requerido'),
});

export interface GetBookResponse extends BookValues {
  id: number;
}

export interface BookExtraInfo extends Omit<GetBookResponse, 'author_id' | 'genre_id'> {
  avg_rating: 5;
}

export type KeyBookTye = keyof GetBookResponse;
export type BookValues = z.infer<typeof bookSchema>;
