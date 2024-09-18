import { z } from 'zod';

export const authorSchema = z.object({
  name: z.string().min(3, 'Requerido'),
  biography: z.string().min(3, 'Requerido'),
  img: z.string().min(3, 'Requerido'),
});

export interface GetAuthorResponse extends AuthorValues {
  id: number;
}
export type KeyAuthorTye = keyof GetAuthorResponse;
export type AuthorValues = z.infer<typeof authorSchema>;
