import BookReview from './_components/BookReview';
import BookOptionsBar from './_components/BookOptionsBar';
import BookOverviewContainer from './_containers/BookOverviewContainer';
import fetcher from '@/utils/fetcher';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import ErrorMessage from '@/components/ErrorMessage';

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

  if (typeof book === 'string') {
    return (
      <section className="min-h-[calc(100dvh-4rem)] content-center">
        <ErrorMessage error={`Book not found: ${book}`} color="red" />
      </section>
    );
  }

  return (
    <section className="max-w-page mt-8 px-6 md:px-8">
      <div className="flex flex-col gap-16">
        <BookOverviewContainer book={book} />
        <BookOptionsBar bookId={Number(book.author_id)} />
        <BookReview />
      </div>
    </section>
  );
}
