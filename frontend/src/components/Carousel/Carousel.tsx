'use client';

import Book from '../Book';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperConfig } from './swipperConfig';
import 'swiper/css/navigation';
import 'swiper/css';
import './swiper.styles.css';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';

interface Props {
  books: GetBookResponse[];
}

export default function Carousel({ books }: Props) {
  const controls = ['swiper-button-next', 'swiper-button-prev'];

  return (
    <div className="book-slider-container">
      <Swiper {...SwiperConfig}>
        {books.map(({ title, img, id }) => (
          <SwiperSlide className="book-slide" key={id}>
            <Book bookId={id} name={title} url={img} />
          </SwiperSlide>
        ))}
        {controls.map((control, i) => (
          <div key={i} className={control}></div>
        ))}
      </Swiper>
    </div>
  );
}
