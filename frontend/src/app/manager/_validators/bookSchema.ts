import { TypeOf, z } from 'zod';

export const bookSchema = z.object({
  titulo: z.string().min(1, 'Requerido'),
  descripcion: z.string().min(1, 'Requerido'),
  imagen: z.string().min(1, 'Requerido'),
  genero: z.string().min(1, 'Requerido'),
  author: z.string().min(1, 'Requerido'),
});

export type BookValues = z.infer<typeof bookSchema>;
