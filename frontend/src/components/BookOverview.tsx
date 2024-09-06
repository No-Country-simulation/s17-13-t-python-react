import React from 'react';

import Star from '@/components/Star';
import Image from 'next/image';

////////////////////////////

interface Book {
  cover: string;
  title: string;
  rating: number;
  author: string;
  editorial: string;
  pageNumber: number;
  description: string;
}

interface BookOverviewProps {
  book: Book;
}

////////////////////////////

export default function BookOverview({ book }: BookOverviewProps) {
  return (
    <section className="grid grid-cols-[1fr] grid-rows-2 gap-9 lg:h-[600px] lg:grid-cols-[1fr_1.5fr] lg:grid-rows-1 lg:gap-0 lg:px-8 lg:py-4">
      <div className="relative h-full w-full">
        <Image
          src={book.cover}
          quality={80}
          fill
          alt={book.title}
          className="inset-0 block object-cover opacity-90 blur-md lg:translate-x-[-235px]"
        />

        <div className="absolute left-[50%] top-[50%] z-20 h-[400px] w-[300px] translate-x-[-50%] translate-y-[-50%] lg:h-[90%] lg:w-[350px]">
          <Image
            fill
            src={book.cover}
            alt={book.title}
            className="block h-full w-full object-fill shadow-xl"
          />
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-center px-4 lg:px-0">
        <div className="mb-2 flex items-center gap-5">
          <h1 className="text-3xl font-semibold">{book.title}</h1>
          <div className="flex gap-1">
            <Star size={21} defaultRating={book.rating} color="#264E61" />
          </div>
        </div>

        <div className="mb-7">
          <p className="text-base">Autor: {book.author}</p>
          <p className="text-base">Editorial: {book.editorial}</p>
          <p className="text-base">Páginas: {book.pageNumber}</p>
        </div>

        <p className="text-base leading-7">{book.description}</p>
      </div>
    </section>
  );
}