'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseInput from '@/components/BaseInput';
import FeedbackButton from '@/components/FeedbackButton';
import { AuthValues, registerSchema } from '@/app/(auth)/_validations/authSchemas';
import PasswordInput from './PasswordInput';
import { createUser } from '@/libs/createUser.action';
import { LoginUserResponse, useUserStore } from '@/app/store/userStore';
import { signInUser } from '@/libs/signInUser.action';
import { useRouter } from 'next/navigation';
import { ButtonFakeUser } from './ButtonFakeUser';
import { randomUser } from '@/utils/randomUser';
import { useModalStore } from '@/app/store/modalStore';

export default function Register() {
  const { toggleModal } = useModalStore((state) => ({
    toggleModal: state.toggleModal,
  }));
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });
  const { setBasicInfo } = useUserStore((state) => ({
    setBasicInfo: state.setBasicInfo,
  }));
  const inputStyles =
    'shadow-btn h-[46px] w-full md:w-[343px] outline-1 outline outline-[#E7E0CF] text-[#E7E0CF] rounded-3xl px-5 text-lg font-medium bg-[#E7E0CF22] backdrop-blur-[50px] placeholder:font-medium placeholder:capitalize placeholder:text-current';

  const generateRandomUser = (): void => {
    const user = randomUser();

    reset({
      email: user.email,
      password: user.password,
      name: user.name,
      confirmedPassword: user.password,
    });
  };

  const onSubmit: SubmitHandler<AuthValues> = async (formValue) => {
    const { data, errorMessage, success } = await createUser(formValue, 'auth/register');

    if (!success || data === null) {
      return console.log(errorMessage);
    }

    const logger = await signInUser<LoginUserResponse>(
      { email: formValue.email, password: formValue.password },
      'auth/login',
    );

    if (!logger.success || logger.data === null) {
      return console.log(logger.errorMessage);
    }

    const { email, id, name } = logger.data;

    
    setBasicInfo({ id, name, email, isLogged: true, role: 'user' });

    if (!logger.data.preferences) {
      toggleModal();
    }

    router.push('/');
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
        customClass={inputStyles}
      />
      <BaseInput
        name="email"
        placeholder="email"
        control={control}
        type="email"
        error={errors.email}
        customClass={inputStyles}
      />
      <PasswordInput
        name="password"
        placeholder="contraseña"
        control={control}
        error={errors.password}
        customClass={inputStyles}
      />
      <PasswordInput
        name="confirmedPassword"
        placeholder="Repetir contraseña"
        control={control}
        error={errors.confirmedPassword}
        customClass={inputStyles}
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
      <ButtonFakeUser handleClick={generateRandomUser} />
    </form>
  );
}
