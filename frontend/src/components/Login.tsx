'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PasswordInput from '@/components/PasswordInput';
import BaseInput from '@/components/BaseInput';
import FeedbackButton from '@/components/FeedbackButton';
import { AuthValues, loginSchema } from '@/app/(auth)/_validations/authSchemas';
import { signInUser } from '@/libs/signInUser.action';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/app/store/modalStore';
import { useUserStore } from '@/app/store/userStore';

interface LoginResponse {
  id:string,
  email: string,
  name: string,

}

export default function Login() {
  const router = useRouter();
  const { toggleModal } = useModalStore((state) => ({
    toggleModal: state.toggleModal,
  }));
  const { setBasicInfo } = useUserStore((state) => ({
    setBasicInfo: state.setBasicInfo,
  }));
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AuthValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthValues> = async ({ email, password }) => {
    const logger = await signInUser<LoginResponse>(
      { email: email, password: password },
      'auth/login',
    );

    if (!logger.success || logger.data === null) {
      return console.log(logger.errorMessage);
    }




    // TODO: cuando se hace el login, el Back devolverá la data del usuario
    setBasicInfo({id:logger.data.id, name: logger.data.name, email: email, isLogged: true, role: 'user' });
    //se agrego id como 
    router.push('/user');
    toggleModal();
  };

  return (
    <form
      className="flex w-full max-w-[21.875rem] flex-col gap-6 pb-14"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
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
      <div className="flex flex-col items-center justify-center gap-4 pb-10 pt-5 xs:flex-row xs:justify-between">
        <label
          htmlFor="saveData"
          className="flex items-center gap-2 border-none text-lg font-medium capitalize text-[#E7E0CF]"
        >
          <input
            className="size-[1.43rem] border-none accent-current"
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
