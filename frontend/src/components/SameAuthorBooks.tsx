'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperConfig } from '../components/Carousel/swipperConfig';
import { Books } from '@/interfaces/BookSlice.interface';
import 'swiper/css/navigation';
import 'swiper/css';

interface Props {
  title: string;
  books: Books[];
}

export default function SameAuthorBooks({ title, books }: Props) {
  return (
    <section className="min-h-dvh">
      {title && (
        <h2 className="mx-auto max-w-[85rem] py-16 text-[2.1875rem] font-semibold">{title}</h2>
      )}
      {books.length === 1 ? (
        <div className="flex px-7">
          <img
            className="h-72 w-48 object-cover md:h-[21.625rem] md:w-56"
            title={books[0].name}
            src={books[0].url}
            alt={`cover book ${books[0].name}`}
          />
        </div>
      ) : (
        <Swiper {...SwiperConfig}>
          {books.map(({ name, url }) => (
            <SwiperSlide className="flex" key={name}>
              <img
                className="mx-auto h-72 w-48 select-none object-cover md:h-[21.625rem] md:w-56"
                title={name}
                src={url}
                alt={`cover book ${name}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
