import { Controller } from 'react-hook-form';
import { BaseInputProps } from '@/interfaces/InputProps.interface';

export default function BaseInput({ placeholder, name, type, control, error }: BaseInputProps) {
  const inputStyles = `shadow-btn h-[46px] w-full md:w-[343px] outline-1 outline outline-[#E7E0CF] text-[#E7E0CF] rounded-3xl px-5 text-lg font-medium bg-[#E7E0CF22] backdrop-blur-[50px] placeholder:font-medium placeholder:capitalize placeholder:text-current ${error ? 'invalid' : ''}`;

  return (
    <div className="relative">
      <label htmlFor={`input-${name}`} className="sr-only">
        {name}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            id={`input-${name}`}
            className={inputStyles}
            {...field}
            type={type}
            placeholder={placeholder}
          />
        )}
      />
      {error && (
        <p className="absolute translate-y-1 pl-5 text-xs font-bold tracking-wide text-[#62262E]">
          {error.message}
        </p>
      )}
    </div>
  );
}
