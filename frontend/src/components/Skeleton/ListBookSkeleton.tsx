import React from 'react';

export function BookSkeleton() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={'mb-2 h-48 w-32 animate-pulse rounded bg-gray-200'}
        style={{ minHeight: '1rem' }}
      />
      <div
        className={'mb-1 h-4 w-24 animate-pulse rounded bg-gray-200'}
        style={{ minHeight: '1rem' }}
      />
    </div>
  );
}

export default function ListBookSkeleton() {
  return (
    <div className="lex flex-wrap justify-between gap-x-6 gap-y-20 sm:justify-normal sm:gap-10 md:gap-x-20 md:gap-y-32">
      {[...Array(4)].map((_, index) => (
        <BookSkeleton key={index} />
      ))}
    </div>
  );
}
