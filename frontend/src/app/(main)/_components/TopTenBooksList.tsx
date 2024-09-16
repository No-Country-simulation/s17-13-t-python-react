'use client';

import React, { useEffect, useRef, useState } from 'react';
import TopTenBooksItem from './TopTenBooksItem';

const delay = 5000;

export default function TopTenBooksList({ books }: any) {
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  //////////////////////////

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => resetTimeout();
  }, [index, books.length]);

  //////////////////////////
  return (
    <div className="h-[350px] w-full rounded-[35px] md:w-[350px] overflow-hidden md:rounded-2xl bg-[#264E61] text-[#E7E0CF] py-4 lg:h-[403.88px] lg:w-full">
      {/* Books */}
      <ul
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        className="ease h-[300px] w-full flex-grow whitespace-nowrap transition duration-[1000ms] lg:h-[360px]"
      >
        {books.map((book: any, idx: any) => (
          <TopTenBooksItem key={book.title} book={book} index={idx + 1} />
        ))}
      </ul>

      {/* dots */}
      <div className="relative h-full w-full">
        <ul className="absolute left-[50%] top-[5px] flex translate-x-[-50%] gap-2">
          {books.map((_: any, idx: any) => (
            <li
              key={idx}
              className={`ease cursor-pointer rounded-[50%] p-[6px] transition duration-[1s] ${index === idx ? 'bg-[#E7E0CF]' : 'bg-[#ADADAD]'}`}
              onClick={() => setIndex(idx)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
