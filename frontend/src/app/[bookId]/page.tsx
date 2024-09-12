// import BookOverview from '@/components/BookOverview';
import { getBook } from '@/libs/actions';
import BookReview from './_components/BookReview';
import BookOptionsBar from './_components/BookOptionsBar';
import Carousel from '@/components/Carousel/Carousel';
import { Book } from '@/interfaces/Book.interface';
import BookOverview from './_containers/BookOverviewContainer';
import BookOverviewContainer from './_containers/BookOverviewContainer';

////////////////////////////

interface PageProps {
  params: {
    bookId: number;
  };
}

////////////////////////////

export default async function page({ params }: PageProps) {
  const { bookId } = params || '';
  const book: Book | null = await getBook('OL45804W');

  if (!book) {
    return (
      <section className="mt-8">
        <p>Book not found</p>
      </section>
    );
  }

  return (
    <section className="max-w-page mt-8 px-6 md:px-8">
      <div className="flex flex-col gap-16">
        <BookOverviewContainer book={book} />
        <BookOptionsBar />
        <BookReview />
      </div>
      <Carousel
        carouselTitle="Del mismo autor"
        books={[{ name: 'Bodas de odio', url: '/bibliozBook/book-2.png' }]}
      />
      <Carousel carouselTitle="Porque también te puede interesar" books={[]} />
    </section>
  );
}
