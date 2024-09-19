'use client';

import BookViewer from '../_components/BookViewer';
import BookDescription from '../_components/BookDescription';
import { useState } from 'react';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';

interface Props {
  book: GetBookResponse;
  avg_rating: number;
  author: string;
}

export default function BookOverviewContainer({ book, avg_rating, author }: Props) {
  const [isViewViewer, setIsViewViewer] = useState(false);

  function toggleViewer(): void {
    setIsViewViewer((prev) => !prev);
  }

  return !isViewViewer ? (
    <BookDescription
      book={book}
      handlerViewer={toggleViewer}
      avg_rating={avg_rating}
      author={author}
    />
  ) : (
    <BookViewer images={[book.img, book.img]} title={book.title} handlerViewer={toggleViewer} />
  );
}
