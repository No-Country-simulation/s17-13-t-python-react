import fetcher from '@/utils/fetcher';
import { GetBookResponse } from '../_validators/bookSchema';
fetcher;

interface GetUserResponse {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const UserAndBooks = Promise.all([
  fetcher<GetUserResponse[]>('auth/'),
  fetcher<GetBookResponse[]>('book/'),
]);
