import React from 'react';
import BookOverview from '@/components/BookOverview';
import { getBook } from '@/libs/actions';
import BookReview from '@/components/BookReview';
import BookOptionsBar from '@/components/BookOptionsBar';
import Carousel from '@/components/Carousel/Carousel';
import book1 from '/public/bibliozBook/book-3.png';
import book2 from '/public/bibliozBook/book-back.png';

import { IoClose } from 'react-icons/io5';

////////////////////////////

interface PageProps {
  params: {
    bookId: number;
  };
}

////////////////////////////

export default async function page({ params }: PageProps) {
  const { bookId } = params || '';
  const mockupBook = [book1.src, book2.src];

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
      <div>
        <button type="button">
          <IoClose size={35} />
        </button>
        <figure className="flex items-center justify-center gap-12">
          {mockupBook.map((book) => (
            <img
              className="h-[42rem] w-[28rem] shadow-[0px_6px_4px_0px_#00000040]"
              key={book}
              src={book}
              alt=""
            />
          ))}
          <figcaption className="sr-only">books</figcaption>
        </figure>
      </div>
      <BookOverview book={book} />
      <section className="p-12">
        <BookOptionsBar />
      </section>
      <BookReview />
      <Carousel
        carouselTitle="Del mismo autor"
        books={[{ name: 'Bodas de odio', url: '/bibliozBook/book-2.png' }]}
      />
      <Carousel carouselTitle="Porque también te puede interesar" books={[]} />
    </section>
  );
}
