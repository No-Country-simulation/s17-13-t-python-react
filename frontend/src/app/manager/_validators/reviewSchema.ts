import { z } from 'zod';

export const reviewSchema = z.object({
  rating: z.string().min(1, 'El rating es requerido'),
  comment: z.string().min(3, 'El comentario debe tener al menos 3 caracteres'),
  user_id: z.string().min(1, 'El ID de usuario es requerido'),
  book_id: z.string().min(1, 'El ID del libro es requerido'),
});

export type ReviewValues = z.infer<typeof reviewSchema>;
export type keyReviewType = keyof ReviewValues;
