import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import { GetGenreResponse } from '@/app/manager/_validators/genreSchema';
import builderApiUrl from '@/utils/builderApiUrl';
import fetcher from '@/utils/fetcher';
import axios from 'axios';
import DynamicGallery from '@/components/DynamicGallery';

interface Props {
  gender_id: string;
}

export default async function GenderBooks({ gender_id }: Props) {
  const gender = await fetcher<GetGenreResponse>(`genre/${gender_id}`);

  if (typeof gender === 'string') return;

  const books = await axios.post<GetBookResponse[]>(builderApiUrl('search'), {
    name_genre: gender.name,
  });

  if (typeof books === 'string') return;

  return <DynamicGallery books={books.data} carouselTitle={'Libros que te podrían interesar'} />;
}
