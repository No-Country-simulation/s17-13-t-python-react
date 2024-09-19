import BookReview from './_components/BookReview';
import BookOptionsBar from './_components/BookOptionsBar';
import BookOverviewContainer from './_containers/BookOverviewContainer';
import fetcher from '@/utils/fetcher';
import { BookExtraInfo, GetBookResponse } from '@/app/manager/_validators/bookSchema';
import ErrorMessage from '@/components/ErrorMessage';
import { GetAuthorResponse } from '@/app/manager/_validators/authorSchema';
import DynamicGallery from '@/components/DynamicGallery';
import { Suspense } from 'react';
import ListBookSkeleton from '@/components/Skeleton/ListBookSkeleton';
import GenderBooks from './_containers/GenderBooks';

////////////////////////////

interface PageProps {
  params: {
    bookId: number;
  };
}

////////////////////////////

export default async function page({ params }: PageProps) {
  const { bookId } = params || '';
  const book = await fetcher<GetBookResponse>(`book/${bookId}`);
  const extraBookInfo = await fetcher<BookExtraInfo>(`servicesBook/book/${bookId}`);

  if (typeof book === 'string' || typeof extraBookInfo === 'string') {
    return <ErrorMessage error={`Book not found: ${book}`} color="red" />;
  }

  const booksAuthor = await fetcher<GetBookResponse[]>(
    `servicesBook/booksOfAuthor/${book.author_id}`,
  );
  const authorBook = await fetcher<GetAuthorResponse>(`author/${book.author_id}`);

  if (typeof authorBook === 'string') {
    return <ErrorMessage error={`Book not found: ${book}`} color="red" />;
  }

  return (
    <section className="max-w-page mt-8 px-6 md:px-8">
      <div className="flex flex-col gap-8">
        <BookOverviewContainer
          book={book}
          avg_rating={extraBookInfo.avg_rating}
          author={authorBook.name}
        />
        <BookOptionsBar bookId={Number(book.author_id)} />
        <BookReview idBook={bookId} />
        {typeof booksAuthor !== 'string' && (
          <Suspense fallback={<ListBookSkeleton />}>
            <DynamicGallery books={booksAuthor} carouselTitle="Libros de este autor" />
          </Suspense>
        )}
        <GenderBooks gender_id={book.genre_id} />
      </div>
    </section>
  );
}
