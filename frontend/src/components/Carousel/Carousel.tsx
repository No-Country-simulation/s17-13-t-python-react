'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperConfig } from './swipperConfig';
import { Books } from '@/interfaces/BookSlice.interface';
import Title from '../Typography/Title';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css';
import './swiper.styles.css';

interface Props {
  carouselTitle: string;
  books: Books[];
}

// TODO Eliminar Partial type cuando se tenga la data dinámica
export default function Carousel({ books, carouselTitle }: Props) {
  const controls = ['swiper-button-next', 'swiper-button-prev'];
  const mockupBooks: Books[] = [
    { name: 'El secreto de  Matilda', url: '/bibliozBook/book-1.png', id: 1 },
    { name: 'Bodas de odio', url: '/bibliozBook/book-2.png', id: 2 },
    { name: 'Amor entre páginas', url: '/bibliozBook/book-3.png', id: 3 },
    { name: 'Donde se encuentra lo que perdimos', url: '/bibliozBook/book-4.png', id: 4 },
    { name: 'El vuelo de la libélula', url: '/bibliozBook/book-5.png', id: 5 },
    { name: 'Fuego la sed', url: '/bibliozBook/book-6.png', id: 6 },
  ];

  return (
    <section className="py-20 overflow-hidden">
      {carouselTitle && (
        <Title
          level={2}
          title={carouselTitle}
          customClass="mx-auto max-w-page pb-16 text-[2.1875rem] font-semibold"
        />
      )}
      {books && books.length === 1 ? (
        <div className="flex justify-start">
          <img
            className="h-72 w-48 object-cover md:h-[21.625rem] md:w-56"
            title={books[0].name}
            src={books[0].url}
            alt={`cover book ${books[0].name}`}
          />
        </div>
      ) : (
        <div className="book-slider-container">
        <Swiper {...SwiperConfig}>
          {mockupBooks.map(({ name, url, id }) => (
            <SwiperSlide className="book-slide" key={name}>
              <figure className="book-figure">
                <Link className='book-link' href={`/book/${id}`}>
                  <img
                    className="book-image"
                    title={name}
                    src={url}
                    alt={`cover book ${name}`}
                  />
                </Link>
                <figcaption className="book-caption">
                  {name}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
          {controls.map((control, i) => (
            <div key={i} className={control}></div>
          ))}
        </Swiper>
        </div>
      )}
    </section>
  );
}
