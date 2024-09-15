'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import FeedbackButton from '@/components/FeedbackButton';
import { genreSchema, GenreValues } from '../_validators/genreSchema';
import BaseInput from '@/components/BaseInput';
import { createGenre } from '@/libs/createGenre.action';
import Anchor from './Anchor';

interface GenderPostResponse {
  name: string;
}

export default function GenderForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<GenreValues>({
    resolver: zodResolver(genreSchema),
    mode: 'onChange',
  });
  const inputStyles =
    'focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 dark:placeholder-gray-400 text-black';

  const onSubmit: SubmitHandler<GenreValues> = async (formValue) => {
    const { data, errorMessage, success } = await createGenre<GenderPostResponse>(
      formValue,
      '/genre/',
    );

    if (!success || data === null) {
      return toast.error(`Fallo al crear el género ${errorMessage}`);
    }

    toast.success(`Género nuevo creado: ${data.name.toUpperCase()} `);
  };

  return (
    <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <div className="grid gap-4 sm:grid-cols-1 sm:gap-6">
        <div className="w-full">
          <label htmlFor="genre" className="block pb-2 text-sm font-medium">
            Genero
          </label>
          <BaseInput
            control={control}
            error={errors.name}
            name={'name'}
            customClass={inputStyles}
            placeholder=""
            errorColor="white"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <FeedbackButton
          feedback="Completa todos los campos"
          isValid={isValid}
          isSubmitting={isSubmitting}
          type="submit"
          text="Crear genero"
          feedBackColor="white"
        />
        <Anchor customClass='text-white' href="/manager/genre/content" text="ver géneros" />
      </div>
    </form>
  );
}
