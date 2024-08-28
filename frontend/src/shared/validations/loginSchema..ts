import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Correo invalido').min(1, 'El correo es obligatorio'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type LoginValues = z.infer<typeof loginSchema>;
