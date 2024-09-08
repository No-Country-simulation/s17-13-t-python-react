import React from 'react';
import BookOverview from '@/components/BookOverview';
import { getBook } from '@/libs/actions';
import BookReview from '@/components/BookReview';
import BookOptionsBar from '@/components/BookOptionsBar';
import Carousel from '@/components/Carousel/Carousel';

////////////////////////////

interface PageProps {
  params: {
    bookId: number;
  };
}

////////////////////////////

export default async function page({ params }: PageProps) {
  const { bookId } = params || '';
  console.log(bookId);

  const book = await getBook('OL45804W');

  if (!book) {
    return (
      <section className="mt-8">
        <p>Book not found</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <BookOverview book={book} />
      <section className="p-12">
        <BookOptionsBar />
      </section>
      <BookReview />
      <Carousel
        carouselTitle="Del mismo autor"
        books={[{ name: 'Bodas de odio', url: '/bibliozBook/book-2.png' }]}
      />
      <Carousel carouselTitle="Porque también te puede interesar" />
    </section>
  );
}
