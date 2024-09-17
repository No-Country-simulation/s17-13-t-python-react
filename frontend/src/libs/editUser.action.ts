'use server';

import { ResponseStatus } from '@/interfaces/ResponseStatus.interface';
import builderApiUrl from '@/utils/builderApiUrl';
import axios from 'axios';

export interface UserEdit {
  img: string;
  city: string;
  user: Partial<{
    id: string;
    name: string;
    email: string;
  }>;
}

export async function editUser<T>(formData: Partial<UserEdit>): Promise<ResponseStatus<T>> {
  console.log('formData', formData);

  if (!formData.user?.id) {
    throw new Error('El usuario no puede ser nulo');
  }

  const url = builderApiUrl(`profile/${formData.user!.id}`);

  try {
    const userRequest = await axios.put<T>(url, formData, {
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
