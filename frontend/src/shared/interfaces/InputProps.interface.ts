import { Control, FieldError } from 'react-hook-form';
import { AuthValues } from '../validations/authSchemas';

export interface BaseInputProps {
  type: 'text' | 'number' | 'email';
  name: keyof AuthValues;
  placeholder: string;
  control: Control<AuthValues>;
  error?: FieldError;
}

export interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {}
