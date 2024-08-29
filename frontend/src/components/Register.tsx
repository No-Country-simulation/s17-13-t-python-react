'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseInput from '@/shared/components/BaseInput';
import FeedbackButton from '@/shared/components/FeedbackButton';
import { AuthValues, registerSchema } from '@/shared/validations/authSchemas';
import PasswordInput from '@/shared/components/PasswordInput';
import transformCharacters from '@/utils/transformCharacters';

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex w-full max-w-[21.875rem] flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <BaseInput name="name" placeholder="name" control={control} type="text" error={errors.name} />
      <BaseInput
        name="email"
        placeholder="email"
        control={control}
        type="email"
        error={errors.email}
      />
      <PasswordInput
        name="password"
        placeholder="password"
        control={control}
        error={errors.password}
      />
      <PasswordInput
        name="confirmedPassword"
        placeholder="Repetir contraseña"
        control={control}
        error={errors.confirmedPassword}
      />

      <div className="flex flex-col items-center justify-center gap-4 xs:flex-row xs:justify-between">
        <label
          htmlFor="saveData"
          className="flex items-center gap-2 text-lg font-medium capitalize"
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
          feedback='Completa todos los campos'
          isValid={isValid}
          isSubmitting={isSubmitting}
          type="submit"
          text="Iniciar sesión"
        />
      </div>
    </form>
  );
}
