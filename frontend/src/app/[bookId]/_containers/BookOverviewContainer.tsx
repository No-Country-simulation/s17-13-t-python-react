'use client';

import BookViewer from '../_components/BookViewer';
import BookDescription from '../_components/BookDescription';
import { Book } from '@/interfaces/Book.interface';
import { useState } from 'react';

interface Props {
  book: Book;
}

export default function BookOverviewContainer({ book }: Props) {
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
