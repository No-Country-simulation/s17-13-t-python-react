'use client';

import FeedbackButton from '@/components/FeedbackButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import BaseInput from '@/components/BaseInput';
import { authorSchema, AuthorValues } from '../_validators/authorSchema';
import { createAuthor } from '@/libs/createAuthor.action';
import Anchor from './Anchor';

interface AuthorPostResponse extends AuthorValues {}

export default function AuthorForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthorValues>({
    resolver: zodResolver(authorSchema),
    mode: 'onChange',
  });
  const inputStyles =
    'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 text-black';

  const onSubmit: SubmitHandler<AuthorValues> = async (formValue) => {
    const { data, errorMessage, success } = await createAuthor<AuthorPostResponse>(
      formValue,
      '/author/',
    );

    if (!success || data === null) {
      return toast.error(`Fallo al crear el autor ${errorMessage}`);
    }

    toast.success(`Nuevo autor creado : ${data.name.toUpperCase()} `);
  };

  return (
    <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre
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
        <div className="w-full">
          <label htmlFor="img" className="mb-2 block text-sm font-medium">
            Imagen
          </label>
          <BaseInput
            control={control}
            error={errors.img}
            name={'img'}
            customClass={inputStyles}
            placeholder=""
            errorColor="white"
            type="text"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="biography" className="mb-2 block text-sm font-medium">
            Biografía
          </label>
          <BaseInput
            control={control}
            error={errors.biography}
            name={'biography'}
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
          text="Crear autor"
          feedBackColor="white"
        />
        <Anchor customClass='text-white' href="/manager/author/content" text="ver autores" />
      </div>
    </form>
  );
}
