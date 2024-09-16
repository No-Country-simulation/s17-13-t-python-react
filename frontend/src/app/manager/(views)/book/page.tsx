import Title from '@/components/Typography/Title';
import BookForm from '../../_components/BookForm';
import fetcher from '@/utils/fetcher';
import { GetAuthorResponse } from '../../_validators/authorSchema';
import { GetGenreResponse } from '../../_validators/genreSchema';

export default async function BookManager() {
  const data: (string | GetGenreResponse[] | GetAuthorResponse[])[] = await Promise.all([
    fetcher<GetAuthorResponse[]>('/author/'),
    fetcher<GetGenreResponse[]>('/genre/'),
  ]);

  if (typeof data[0] === 'string') {
    return <p>{data[0]}</p>;
  }

  if (typeof data[1] === 'string') {
    return <p>{data[1]}</p>;
  }

  const authors = data[0] as GetAuthorResponse[];
  const genders = data[1] as GetGenreResponse[];

  return (
    <>
      <Title customClass="text-stroke" level={2} title="Creador de libros" />
      <BookForm authors={authors} genders={genders} />
    </>
  );
}
