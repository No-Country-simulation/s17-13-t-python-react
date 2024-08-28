import BaseInput from '@/shared/components/BaseInput';
import { registerSchema, RegisterValues } from '@/shared/validations/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  // Funcion de envio de datos al backend
  const onSubmit: SubmitHandler<RegisterValues> = (data) => {
    console.log(data);
    // LOGICA
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[21.875rem] flex-col gap-6"
      >
        <BaseInput
          name="name"
          placeholder="name"
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
      </form>
    </>
  );
}
