'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import BaseInput from './BaseInput';
import ButtonBase from './ButtonBase';

interface EditUserProfileFormProps {
  photo: string | null;
  setEditProfile: (edit: boolean) => void;
}

interface FormData {
  name: string;
  location: string;
  user: string;
}

const inputStyles =
  'placeholder:text-[#e7e0cf69] w-[100%] md:w-[50%] outline-none text-base rounded-full border-[1px] border-[#E7E0CF] bg-[#E7E0CF1A] px-4 py-1 text-[#E7E0CF]';

export default function EditUserProfileForm({ photo, setEditProfile }: EditUserProfileFormProps) {
  const { handleSubmit, reset, control } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const updatedData = { ...data, photo };
    console.log(updatedData);

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[80%] flex-col sm:w-[55%] md:w-[100%]"
    >
      <div className="flex flex-grow flex-col gap-5 md:gap-9">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-lg font-medium text-[#E7E0CF]">
            Tu nombre
          </label>

          <BaseInput
            customClass={inputStyles}
            name="name"
            type="text"
            placeholder="Tu nombre"
            control={control}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-lg font-medium text-[#E7E0CF]">
            Ubicación
          </label>

          <BaseInput
            customClass={inputStyles}
            name="location"
            type="text"
            placeholder="Ubicación"
            control={control}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-lg font-medium text-[#E7E0CF]">
            Usuario
          </label>

          <BaseInput
            customClass={inputStyles}
            name="user"
            type="text"
            placeholder="Usuario"
            control={control}
          />
        </div>
      </div>

      <div className="flex items-end justify-center gap-4 md:justify-end">
        <ButtonBase
          text="Cerrar sesíon"
          alt="Cerrar sesíon"
          type="button"
          handleCLick={() => setEditProfile(false)}
          customClass="!bg-transparent border-[1px] border-[#E7E0CF] text-[#E7E0CF]"
        />

        <ButtonBase
          text="Guardar cambios"
          alt="Guardar cambios"
          type="submit"
          customClass="!bg-[#E7E0CF]  !text-[#47242A]"
        />
      </div>
    </form>
  );
}
