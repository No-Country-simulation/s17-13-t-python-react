import { useState } from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import EyeSvg from '../icons/EyeSvg';
import EyeFillSvg from '../icons/EyeFillSvg';
import { PasswordInputProps } from '../interfaces/InputProps.interface';


export default function PasswordInput({
  name,
  placeholder,
  control,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputStyles = `shadow-btn h-12 w-full max-w-[21.875rem] rounded-3xl border-[.1rem] border-[#1E1E1E] bg-[#FDF8FF] px-5 pr-10 text-lg font-medium placeholder:font-medium placeholder:capitalize placeholder:text-current ${error ? 'invalid' : ''}`;

  function togglePasswordVisibility(): void {
    setShowPassword(!showPassword);
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="relative w-full max-w-[21.875rem]">
          <input
            {...field}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            className={inputStyles}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? <EyeFillSvg /> : <EyeSvg />}
          </button>
          {error && (
            <p className="absolute translate-y-1 pl-5 text-xs font-medium tracking-wide text-red-500">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
