import builderApiUrl from '@/utils/builderApiUrl';
import axios from 'axios';

export const AuthorAndGenders = Promise.all([
  axios.get(builderApiUrl('author')),
  axios.get(builderApiUrl('genre')),
]);
