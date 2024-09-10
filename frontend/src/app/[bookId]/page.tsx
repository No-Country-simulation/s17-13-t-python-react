import React from 'react';
import { getBook } from '@/libs/actions';
import DetailBook from '@/components/DetailBook';

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
    <>
      <DetailBook book={book} />
    </>
  );
}
