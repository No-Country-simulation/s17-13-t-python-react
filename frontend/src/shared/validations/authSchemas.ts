import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Correo invalido').min(1, 'El correo es obligatorio'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export const registerSchema = z
  .object({
    name: z.string().max(20, 'El nombre debe ser máximo de 20 caracteres'),
    email: z.string().email('Correo invalido').min(1, 'El correo es obligatorio'),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmedPassword: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmedPassword'],
  });

export type RegisterValues = z.infer<typeof registerSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type AuthValues = LoginValues & RegisterValues;
