import { Control, FieldError } from 'react-hook-form';
import { LoginValues } from '../validations/loginSchema.';

export interface BaseInputProps {
  type: 'text' | 'number' | 'email';
  name: keyof LoginValues;
  placeholder: string;
  control: Control<LoginValues>;
  error?: FieldError;
}

export interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {}
