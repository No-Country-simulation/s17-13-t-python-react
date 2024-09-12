'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { BookValues, bookSchema } from "../_validators/bookSchema";

export default function GenderForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
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
      </div>
      <button
        type="submit"
        className="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-auto mt-4 block items-center rounded-lg bg-main px-8 py-2.5 text-center text-sm font-medium text-white focus:ring-4 sm:mt-6"
      >
        Add product
      </button>
    </form>
  );
}
