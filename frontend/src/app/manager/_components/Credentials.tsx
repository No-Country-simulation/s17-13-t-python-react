'use client';

import { FaArrowRight } from 'react-icons/fa6';
import ButtonBase from '@/components/ButtonBase';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { verifyKey } from '../_acctions/actions';

export default function Credentials() {
  const { handleSubmit, control } = useForm<{ key: string }>();
  const router = useRouter();

  const onSubmit: SubmitHandler<{ key: string }> = async ({ key }) => {
    if (key.trim() === '') {
      return toast.warning('Debes ingresar una clave');
    }

    const isValidKey = await verifyKey(key);

    if (!isValidKey) {
      return toast.warning('Clave incorrecta');
    }

    router.push('/manager/genre');
  };

  const inputStyles =
    'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-light p-2.5 text-sm dark:border-gray-600 tracking-wider font-medium col-[1/2] row-[1/2] pr-16 text-black';
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="mx-auto flex max-w-96 flex-col justify-center gap-4 rounded-md bg-auxiliary p-4 shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-sm md:px-8 md:py-6"
    >
      <label className="text-lg font-medium text-white" htmlFor="manager">
        Credenciales
      </label>
      <div className="grid">
        <Controller
          defaultValue=""
          name="key"
          control={control}
          render={({ field }) => (
            <input {...field} className={inputStyles} type="text" id="manager" />
          )}
        />
        <ButtonBase
          customClass="col-[1/2] row-[1/2] justify-self-end m-1"
          type="submit"
          hoverStyles={true}
          icon={<FaArrowRight />}
        />
      </div>
    </form>
  );
}
