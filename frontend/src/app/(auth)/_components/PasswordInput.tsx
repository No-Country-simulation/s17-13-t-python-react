import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { PasswordInputProps } from '@/interfaces/InputProps.interface';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import ErrorMessage from '@/components/ErrorMessage';

export default function PasswordInput({
  name,
  placeholder,
  control,
  error,
  customClass,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

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
            className={`${customClass} ${error ? 'invalid' : ''}`}
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
          {error && <ErrorMessage customClass='absolute translate-y-1 left-4' error={error.message!} />}
        </div>
      )}
    />
  );
}
