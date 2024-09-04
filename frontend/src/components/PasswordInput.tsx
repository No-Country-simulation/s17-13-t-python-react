import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { PasswordInputProps } from '@/interfaces/InputProps.interface';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function PasswordInput({ name, placeholder, control, error }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputStyles = `shadow-btn h-[46px] w-full md:w-[343px] outline-1 outline outline-[#E7E0CF] text-[#E7E0CF] rounded-3xl bg-[#E7E0CF22] backdrop-blur-[50px] px-5 pr-10 text-lg font-medium placeholder:font-medium placeholder:capitalize placeholder:text-current ${error ? 'invalid' : ''}`;

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
            {showPassword ? (
              <IoEyeOff size={25} className="text-[#E7E0CF]" />
            ) : (
              <IoEye size={25} className="text-[#E7E0CF]" />
            )}
          </button>
          {error && (
            <p className="absolute translate-y-1 pl-5 text-xs font-bold tracking-wide text-[#62262E]">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
