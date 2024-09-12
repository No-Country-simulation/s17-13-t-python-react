import React from 'react';
import { Controller } from 'react-hook-form';
import ErrorMessage from '@/components/ErrorMessage';
import { BaseInputProps } from '@/interfaces/InputProps.interface';

interface Props extends Omit<BaseInputProps, 'type'> {
  content: {
    id: number;
    author: string;
  }[];
}

export default function Select({
  name,
  control,
  customClass,
  error,
  errorColor,
  placeholder,
  content,
}: Props) {
  return (
    <div className="relative">
      <label htmlFor={`select-${name}`} className="sr-only">
        {name}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select
            className={`${customClass} ${error ? 'invalid' : ''}`}
            id={`select-${name}`}
            {...field}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {content.map(({ author, id }) => (
              <option value={id} key={id}>{author}</option>
            ))}
          </select>
        )}
      />
      {error && <ErrorMessage error={error.message!} color={errorColor} />}
    </div>
  );
}
