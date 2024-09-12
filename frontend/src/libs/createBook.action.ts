'use server';

import axios from 'axios';
import { BookValues, bookSchema } from '@/app/manager/_validators/bookSchema';
import builderApiUrl from '@/utils/builderApiUrl';
import { ResponseStatus } from '@/interfaces/ResponseStatus.interface';

export async function createBook<T>(
  formData: BookValues,
  pathname: string,
): Promise<ResponseStatus<T>> {
  try {
    const revalidateForm = bookSchema.parse(formData);
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
