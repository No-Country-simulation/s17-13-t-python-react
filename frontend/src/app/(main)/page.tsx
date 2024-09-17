import SearchBar from '@/components/SearchBar';
import TopTenBooks from '@/app/(main)/_components/TopTenBooks';
import DynamicGallery from '@/components/DynamicGallery';
import fetcher from '@/utils/fetcher';
import { GetBookResponse } from '../manager/_validators/bookSchema';
import { Suspense } from 'react';
import ListBookSkeleton from '@/components/Skeleton/ListBookSkeleton';

interface HomeProps {
  modal: React.ReactNode;
}
// query params
interface HomeProps {}

export default async function Home({ modal }: HomeProps) {
  const books = await fetcher<GetBookResponse[]>('/servicesBook/newBook');

  if (typeof books === 'string') {
    return <p>{books}</p>;
  }

  return (
    <div className="max-w-page px-6 md:px-8">
      <SearchBar />

      <Suspense fallback={<ListBookSkeleton />}>
        <DynamicGallery books={books} carouselTitle="Tus recomendados" />
      </Suspense>

      <TopTenBooks />

      <Suspense fallback={<ListBookSkeleton />}>
        <DynamicGallery books={books} carouselTitle="Agregados recientemente" />
      </Suspense>

      <Suspense fallback={<ListBookSkeleton />}>
        <DynamicGallery books={books} carouselTitle="Los más buscados" />
      </Suspense>
    </div>
  );
}
