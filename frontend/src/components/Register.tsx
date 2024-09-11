'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseInput from '@/components/BaseInput';
import FeedbackButton from '@/components/FeedbackButton';
import { AuthValues, LoginValues, registerSchema } from '@/app/(auth)/_validations/authSchemas';
import PasswordInput from '@/components/PasswordInput';
import { createUser } from '@/libs/createUser.action';
import { useUserStore } from '@/app/store/userStore';
import { signInUser } from '@/libs/signInUser.action';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/app/store/modalStore';

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const { toggleModal } = useModalStore((state) => ({
    toggleModal: state.toggleModal,
  }));
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
  });
  const { setBasicInfo } = useUserStore((state) => ({
    setBasicInfo: state.setBasicInfo,
  }));

  const onSubmit: SubmitHandler<AuthValues> = async (formValue) => {
    const { data, errorMessage, success } = await createUser<User>(formValue, 'auth/register');

    //  TODO lanza un toast de error o pinta el mensaje en el viewport
    if (!success || data === null) {
      return console.log(errorMessage);
    }

    const logger = await signInUser<LoginValues>(
      { email: formValue.email, password: formValue.password },
      'auth/login',
    );

    if (!logger.success || logger.data === null) {
      return console.log(logger.errorMessage);
    }

    const { email, password } = logger.data;

    // TODO: cuando se hace el login, el Back devolverá la data del usuario

    setBasicInfo({ name: data.name, email: email, isLogged: true, role: 'user' });
    router.push('/');
    toggleModal();
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
