'use server';

import { RegisterValues, registerSchema } from '@/app/(auth)/_validations/authSchemas';
import axios from 'axios';
import builderApiUrl from '@/utils/builderApiUrl';

export interface ResponseStatus<T> {
  data: T | null;
  success: boolean;
  errorMessage: string | null;
}

export async function createUser<T>(
  formData: RegisterValues,
  pathname: string,
): Promise<ResponseStatus<T>> {
  console.log(formData);

  try {
    const revalidateForm = registerSchema.parse(formData);
    const adapterForm = {
      name: revalidateForm.name,
      email: revalidateForm.email,
      password: revalidateForm.password,
    };
    const userRequest = await axios.post<T>(builderApiUrl(pathname), adapterForm, {
      headers: { 'Content-Type': 'application/json' },
    });

    return {
      data: userRequest.data,
      success: true,
      errorMessage: null,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        data: null,
        success: false,
        errorMessage: error.message,
      };
    }
    return {
      data: null,
      success: false,
      errorMessage: 'Unknown Error',
    };
  }
}