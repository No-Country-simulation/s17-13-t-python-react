'use client';

import { GetGenreResponse } from '@/app/manager/_validators/genreSchema';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { PreferencesSchema, PreferencesValues } from '../_validators/modalSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '@/components/ErrorMessage';
import FeedbackButton from '@/components/FeedbackButton';
import CheckBoxInput from '@/components/CheckBoxInput';
import { createPreferences } from '@/libs/createPreferences.action';
import { useUserStore } from '@/app/store/userStore';

interface Props {
  genders: GetGenreResponse[];
}

export default function PreferencesForm({ genders }: Props) {
  const { id } = useUserStore((state) => ({ id: state.id }));
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PreferencesValues>({
    resolver: zodResolver(PreferencesSchema),
    mode: 'onSubmit',
    defaultValues: { genders: [] },
  });

  const onSubmit: SubmitHandler<PreferencesValues> = async (formData) => {
    if (id === null) {
      return;
    }
    await createPreferences({
      gender_ids: [1],
      user_ids: Number(id),
    });
  };

  const inputStyles = `
    h-[46px] max-w-40 rounded-3xl px-5 font-medium text-base 
    grid place-items-center transition-colors 
    cursor-pointer border-[.1rem] border-auxiliary  
  `;

  return (
    <form className="flex flex-col justify-between gap-8" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="grid min-h-52 grid-cols-4 gap-x-6 gap-y-10">
        <legend className="sr-only">Categorías de lectura</legend>
        {genders.map(({ name, id }) => (
          <CheckBoxInput
            key={id}
            gender={name}
            index={id}
            control={control}
            customClass={inputStyles}
          />
        ))}
      </fieldset>
      <div className="flex items-center justify-between">
        <div>
          {errors.genders && (
            <ErrorMessage
              customClass="text-base text-red-500 md:text-lg"
              error={errors.genders.message!}
            />
          )}
        </div>

        <FeedbackButton
          customClass={`${inputStyles} bg-auxiliary ml-auto hover:bg-black`}
          type="submit"
          feedback=""
          isValid={isValid}
          isSubmitting={isSubmitting}
          text="Continuar"
        />
      </div>
    </form>
  );
}
