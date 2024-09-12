'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { BookValues, bookSchema } from '../_validators/bookSchema';
import FeedbackButton from '@/components/FeedbackButton';

export default function BookForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<BookValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<BookValues> = async (bookData) => {
    toast('My first toast');
    console.log(bookData);
  };

  return (
    <form className='grid gap-8' onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Titulo
          </label>
          <input
            type="text"
            name="description"
            id="title"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <div className="w-full">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Imagen
          </label>
          <input
            type="text"
            name="imagen"
            id="price"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Género
          </label>
          <select
            id="gender"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 dark:placeholder-gray-400"
          >
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
            <option value="GA">Gaming/Console</option>
            <option value="PH">Phones</option>
          </select>
        </div>
        <div>
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Autor
          </label>
          <select
            id="author"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 dark:placeholder-gray-400"
          >
            <option value="TV">TV/Monitors</option>
            <option value="PC">PC</option>
            <option value="GA">Gaming/Console</option>
            <option value="PH">Phones</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600"
          ></textarea>
        </div>
      </div>
      <FeedbackButton
          feedback="Completa todos los campos"
          isValid={isValid}
          isSubmitting={isSubmitting}
          type="submit"
          text="Crear libro"
        />
    </form>
  );
}
