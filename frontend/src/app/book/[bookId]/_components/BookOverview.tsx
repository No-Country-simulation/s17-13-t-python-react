'use client';

import BookViewer from './BookViewer';
import { useState } from 'react';
import { Book } from '@/interfaces/Book.interface';
import BookDescription from './BookDescription';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';

////////////////////////////

interface BookOverviewProps {
  book: GetBookResponse;
}

interface Props {
  book: Book;
  handlerViewer: () => void;
}

////////////////////////////

export default function BookOverview({ book }: BookOverviewProps) {
  const [isViewViewer, setIsViewViewer] = useState(false);

  function toggleViewer(): void {
    setIsViewViewer((prev) => !prev);
  }

  return !isViewViewer ? (
    <BookDescription book={book} handlerViewer={toggleViewer} />
  ) : (
    <BookViewer images={[book.img, book.img]} title={book.title} handlerViewer={toggleViewer} />
  );
}
