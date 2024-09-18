'use client';

import BaseInput from '@/components/BaseInput';
import FeedbackButton from '@/components/FeedbackButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import Anchor from './Anchor';
import Select from './Select';
import { reviewSchema, ReviewValues } from '../_validators/reviewSchema';
import { createReview } from '@/libs/createReview.action';

interface Props {
  users: {
    id: number;
    name: string;
  }[];
  books: {
    id: number;
    title: string;
  }[];
}

export default function ReviewForm({ books, users }: Props) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ReviewValues>({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
  });
  const inputStyles =
    'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 text-black';

  console.log(users);

  const onSubmit: SubmitHandler<ReviewValues> = async (formValue) => {
    console.log(formValue);

    const { data, errorMessage, success } = await createReview<ReviewValues>(formValue, '/review');

    if (!success || data === null) {
      return toast.error(`Fallo al crear  la review ${errorMessage}`);
    }
    
    toast.success('Review creada');
    reset();
  };

  return (
    <form className="grid gap-8" onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="rating" className="mb-2 block text-sm font-medium">
            Rating
          </label>
          <BaseInput
            control={control}
            error={errors.rating}
            name={'rating'}
            customClass={inputStyles}
            placeholder=""
            errorColor="white"
            type="number"
          />
        </div>
        <div className="w-full">
          <label htmlFor="comment" className="mb-2 block text-sm font-medium">
            Comentario
          </label>
          <BaseInput
            control={control}
            error={errors.comment}
            name={'comment'}
            customClass={inputStyles}
            placeholder=""
            errorColor="white"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="book_id" className="mb-2 block text-sm font-medium">
            Género
          </label>
          <Select
            control={control}
            error={errors.book_id}
            name={'book_id'}
            customClass={inputStyles}
            placeholder="-- Selecciona el libro --"
            errorColor="white"
            content={books.map(({ id, title }) => ({ id, author: title }))}
          />
        </div>
        <div>
          <label htmlFor="user_id" className="mb-2 block text-sm font-medium">
            Usuario
          </label>
          <Select
            control={control}
            error={errors.user_id}
            name={'user_id'}
            customClass={inputStyles}
            placeholder="-- Selecciona el usuario --"
            errorColor="white"
            content={users.map(({ id, name }) => ({ id, author: name }))}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <FeedbackButton
          feedback="Completa todos los campos"
          isValid={isValid}
          isSubmitting={isSubmitting}
          type="submit"
          text="Crear Review"
        />
        <Anchor customClass="text-white" href="/manager/review/content" text="ver libros" />
      </div>
    </form>
  );
}
