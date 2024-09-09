'use server';

import { LoginValues, loginSchema } from '@/app/(auth)/_validations/authSchemas';
import axios from 'axios';
import builderApiUrl from '@/utils/builderApiUrl';
import { ResponseStatus } from '@/interfaces/ResponseStatus.interface';

export async function signInUser<T>(
  formData: LoginValues,
  pathname: string,
): Promise<ResponseStatus<T>> {
  try {
    const revalidateForm = loginSchema.parse(formData);
    const userRequest = await axios.post<T>(builderApiUrl(pathname), revalidateForm, {
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
