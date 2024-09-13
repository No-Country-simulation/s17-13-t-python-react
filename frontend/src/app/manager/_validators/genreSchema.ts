import { z } from 'zod';

export const genreSchema = z.object({
  name: z.string().min(3, 'Mimino 3 letras'),
});

export interface GetGenreResponse extends GenreValues {
  id: number;
}
export type KeyGenreTye = keyof GetGenreResponse;
export type GenreValues = z.infer<typeof genreSchema>;
