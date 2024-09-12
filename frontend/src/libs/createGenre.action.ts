'use server';

import axios from 'axios';
import { GenreValues, genreSchema } from '@/app/manager/_validators/genreSchema';
import builderApiUrl from '@/utils/builderApiUrl';
import { ResponseStatus } from '@/interfaces/ResponseStatus.interface';

export async function createGenre<T>(
  formData: GenreValues,
  pathname: string,
): Promise<ResponseStatus<T>> {
  try {
    const revalidateForm = genreSchema.parse(formData);
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
