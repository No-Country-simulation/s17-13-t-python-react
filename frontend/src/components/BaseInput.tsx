import { Controller } from 'react-hook-form';
import { BaseInputProps } from '@/interfaces/InputProps.interface';
import ErrorMessage from './ErrorMessage';

export default function BaseInput({
  placeholder,
  name,
  type,
  control,
  error,
  customClass,
  errorColor,
}: BaseInputProps) {
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
            className={`${customClass} ${error ? 'invalid' : ''}`}
            id={`input-${name}`}
            {...field}
            type={type}
            placeholder={placeholder}
          />
        )}
      />
      {error && (
        <ErrorMessage
          customClass="absolute translate-y-1 left-4"
          error={error.message!}
          color={errorColor}
        />
      )}
    </div>
  );
}
