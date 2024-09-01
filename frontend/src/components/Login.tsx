'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PasswordInput from '@/shared/components/PasswordInput';
import BaseInput from '@/shared/components/BaseInput';
import FeedbackButton from '@/shared/components/FeedbackButton';
import { AuthValues, loginSchema } from '@/shared/validations/authSchemas';

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(loginSchema),
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
      {/* <BaseInput
        name="email"
        placeholder="email"
        control={control}
        type="email"
        error={errors.email}
      /> */}
      <PasswordInput
        name="password"
        placeholder="password"
        control={control}
        error={errors.password}
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
