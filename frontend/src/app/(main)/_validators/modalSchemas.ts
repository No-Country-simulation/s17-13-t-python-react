import z from 'zod';

export const PreferencesSchema = z.object({
  genders: z.array(z.string()).min(1, 'Selecciona al menos un género'),
});

export type PreferencesValues = z.infer<typeof PreferencesSchema>;
export type PreferenceKey = keyof PreferencesValues;
