import { Control, FieldError, FieldValues } from 'react-hook-form';

export interface BaseInputProps {
  type: 'text' | 'number' | 'email';
  name: keyof FieldValues;
  placeholder: string;
  control: Control<any>;
  error?: FieldError;
  customClass: string;
  errorColor?: string;
}

export interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {}
