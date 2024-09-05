import React from 'react';
import BookOverview from '@/components/BookOverview';
import { getBook } from '@/libs/actions';

////////////////////////////

interface PageProps {
  params: {
    bookId: number;
  };
}

////////////////////////////

export default async function page({ params }: PageProps) {
  const { bookId } = params || '';
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
    </section>
  );
}
