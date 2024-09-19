import AuthorProfileOverview from '../../_components/AuthorProfileOverview';
import AuthorSkeleton from '@/components/Skeleton/AuthorSkeleton';
import { GetAuthorResponse } from '@/app/manager/_validators/authorSchema';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import fetcher from '@/utils/fetcher';
import DynamicGallery from '@/components/DynamicGallery';
import ListBookSkeleton from '@/components/Skeleton/ListBookSkeleton';
import { Suspense } from 'react';

interface PageProps {
  params: {
    authorId: number;
  };
}

export default async function Author({ params }: PageProps) {
  const author = await fetcher<GetAuthorResponse>(`author/${params.authorId}`);
  const booksAuthor = await fetcher<GetBookResponse[]>(
    `servicesBook/booksOfAuthor/${params.authorId}`,
  );

  return (
    <>
      {typeof author === 'string' ? (
        <AuthorSkeleton />
      ) : (
        <AuthorProfileOverview bio={author.biography} image={author.img} name={author.name} />
      )}
      <div className="py-16">
        {typeof booksAuthor !== 'string' && (
          <Suspense fallback={<ListBookSkeleton />}>
            <DynamicGallery books={booksAuthor} carouselTitle="Libros de este autor" />
          </Suspense>
        )}
      </div>
    </>
  );
}
