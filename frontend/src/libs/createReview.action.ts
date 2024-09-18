'use server';

import { reviewSchema, ReviewValues } from '@/app/manager/_validators/reviewSchema';
import { ResponseStatus } from '@/interfaces/ResponseStatus.interface';
import builderApiUrl from '@/utils/builderApiUrl';
import axios from 'axios';

export async function createReview<T>(
  formData: ReviewValues,
  pathname: string,
): Promise<ResponseStatus<T>> {
  try {
    const revalidateForm = reviewSchema.parse(formData);
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
