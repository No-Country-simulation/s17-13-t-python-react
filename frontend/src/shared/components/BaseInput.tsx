import { Controller } from 'react-hook-form';
import { BaseInputProps } from '../interfaces/InputProps.interface';

export default function BaseInput({ placeholder, name, type, control, error }: BaseInputProps) {
  const inputStyles = `shadow-btn h-12 w-full max-w-[21.875rem] rounded-3xl border-[.1rem] border-[#1E1E1E] bg-[#FDF8FF] px-5 text-lg font-medium placeholder:font-medium placeholder:capitalize placeholder:text-current ${error ? 'invalid' : ''}`;

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
        <p className="absolute translate-y-1 pl-5 text-xs font-medium tracking-wide text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
