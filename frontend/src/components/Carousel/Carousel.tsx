import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperConfig } from './swipperConfig';
import { Books } from '@/interfaces/BookSlice.interface';
import 'swiper/css/navigation';
import 'swiper/css';
import './swiper.styles.css';

interface Props {
  carouselTitle: string;
  books: Books[];
}

// TODO Eliminar Partial type cuando se tenga la data dinámica
export default function Carousel({ books, carouselTitle }: Partial<Props>) {
  const controls = ['swiper-button-next', 'swiper-button-prev'];
  const mockupBooks: Books[] = [
    { name: 'El secreto de  Matilda', url: '/bibliozBook/book-1.png' },
    { name: 'Bodas de odio', url: '/bibliozBook/book-2.png' },
    { name: 'Amor entre páginas', url: '/bibliozBook/book-3.png' },
    { name: 'Donde se encuentra lo que perdimos', url: '/bibliozBook/book-4.png' },
    { name: 'El vuelo de la libélula', url: '/bibliozBook/book-5.png' },
    { name: 'Fuego la sed', url: '/bibliozBook/book-6.png' },
  ];

  return (
    <section className="min-h-dvh">
      {carouselTitle && (
        <h2 className="mx-auto max-w-[81.25rem] py-16 text-[2.1875rem] font-semibold">
          {carouselTitle}
        </h2>
      )}
      <Swiper {...SwiperConfig}>
        {mockupBooks.map(({ name, url }) => (
          <SwiperSlide className="w-fit" key={name}>
            <img
              className="mx-auto h-72 w-48 select-none object-cover md:h-[21.625rem] md:w-56"
              title={name}
              src={url}
              alt={`cover book ${name}`}
            />
          </SwiperSlide>
        ))}
        {controls.map((control, i) => (
          <div key={i} className={control}></div>
        ))}
      </Swiper>
    </section>
  );
}
