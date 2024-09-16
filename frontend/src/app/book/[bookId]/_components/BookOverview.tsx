'use client';

import BookViewer from './BookViewer';
import { useState } from 'react';
import { Book } from '@/interfaces/Book.interface';
import BookDescription from './BookDescription';

////////////////////////////

interface BookOverviewProps {
  book: Book;
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
    <BookViewer handlerViewer={toggleViewer} />
  );
}
