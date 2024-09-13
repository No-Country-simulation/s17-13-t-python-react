'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { BookValues, bookSchema } from '../_validators/bookSchema';
import FeedbackButton from '@/components/FeedbackButton';
import BaseInput from '@/components/BaseInput';
import { GetAuthorResponse } from '../_validators/authorSchema';
import { GetGenreResponse } from '../_validators/genreSchema';
import Select from './Select';
import { createBook } from '@/libs/createBook.action';
import Anchor from './Anchor';

interface Props {
  authors: GetAuthorResponse[];
  genders: GetGenreResponse[];
}

export default function BookForm({ authors, genders }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<BookValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange',
  });
  const inputStyles =
    'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600';

  const onSubmit: SubmitHandler<BookValues> = async (formValue) => {
    const { data, errorMessage, success } = await createBook<BookValues>(formValue, '/book/');

    if (!success || data === null) {
      return toast.error(`Fallo al crear el libro ${errorMessage}`);
    }

    toast.success(`Libro nuevo creado: ${data.title.toUpperCase()} `);
  };

  return (
    <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Titulo
          </label>
          <BaseInput
            control={control}
            error={errors.title}
            name={'title'}
            customClass={inputStyles}
            placeholder=""
            errorColor="var(--main-clr)"
            type="text"
          />
        </div>
        <div className="w-full">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Imagen
          </label>
          <BaseInput
            control={control}
            error={errors.img}
            name={'img'}
            customClass={inputStyles}
            placeholder=""
            errorColor="var(--main-clr)"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Género
          </label>
          <Select
            control={control}
            error={errors.genre_id}
            name={'genre_id'}
            customClass={inputStyles}
            placeholder="-- Selecciona un género --"
            errorColor="var(--main-clr)"
            content={genders.map(({ id, name }) => ({ id, author: name }))}
          />
        </div>
        <div>
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Autor
          </label>
          <Select
            control={control}
            error={errors.author_id}
            name={'author_id'}
            customClass={inputStyles}
            placeholder="-- Selecciona un autor --"
            errorColor="var(--main-clr)"
            content={authors.map(({ id, name }) => ({ id, author: name }))}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <BaseInput
            control={control}
            error={errors.description}
            name={'description'}
            customClass={inputStyles}
            placeholder=""
            errorColor="var(--main-clr)"
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
          text="Crear libro"
          feedBackColor="var(--main-clr)"
        />
        <Anchor href="/manager/book/content" text="ver libros" />
      </div>
    </form>
  );
}
