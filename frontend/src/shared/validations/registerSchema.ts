import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().max(20, 'El nombre debe ser maximo de 20 caracteres'),
  email: z.string().email('Correo invalido').min(1, 'El correo es obligatorio'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmedPassword: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
});

export type RegisterValues = z.infer<typeof registerSchema>;
