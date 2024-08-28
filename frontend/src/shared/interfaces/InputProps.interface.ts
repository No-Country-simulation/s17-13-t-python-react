import { Control, FieldError } from 'react-hook-form';
import { LoginValues } from '../validations/loginSchema.';
import { RegisterValues } from '../validations/registerSchema';

type FormType = LoginValues & RegisterValues 

export interface BaseInputProps {
  type: 'text' | 'number' | 'email';
  name: keyof FormType;
  placeholder: string;
  control: Control<FormType> ;
  error?: FieldError;
}

export interface PasswordInputProps extends Omit<BaseInputProps, 'type'> {}
