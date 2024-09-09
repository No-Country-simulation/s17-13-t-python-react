'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseInput from '@/components/BaseInput';
import FeedbackButton from '@/components/FeedbackButton';
import { AuthValues, registerSchema } from '@/app/(auth)/_validations/authSchemas';
import PasswordInput from '@/components/PasswordInput';
import { createUser } from '@/libs/createUser.action';

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<AuthValues> = async (data) => {
    const response = await createUser(data);
    
    //  TODO lanza un toast de error o pinta el mensaje en el viewport
    if (!response.success) {
      return console.log(response.errorMessage);
    }

    console.log(response.data);
  };

  return (
    <form
      className="flex w-full max-w-[21.875rem] flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <BaseInput
        name="name"
        placeholder="Nombre y apellido"
        control={control}
        type="text"
        error={errors.name}
      />
      <BaseInput
        name="email"
        placeholder="email"
        control={control}
        type="email"
        error={errors.email}
      />
      <PasswordInput
        name="password"
        placeholder="contraseña"
        control={control}
        error={errors.password}
      />
      <PasswordInput
        name="confirmedPassword"
        placeholder="Repetir contraseña"
        control={control}
        error={errors.confirmedPassword}
      />

      <div className="flex flex-col items-center justify-center gap-4 pb-[76px] xs:flex-row xs:justify-between">
        <label
          htmlFor="saveData"
          className="flex items-center gap-2 text-lg font-medium capitalize text-[#E7E0CF]"
        >
          <input
            className="size-[1.43rem] accent-current"
            type="checkbox"
            name="saveData"
            id="saveData"
          />
          recuérdame
        </label>
        <FeedbackButton
          feedback="Completa todos los campos"
          isValid={isValid}
          isSubmitting={isSubmitting}
          type="submit"
          text="Iniciar sesión"
        />
      </div>
    </form>
  );
}
