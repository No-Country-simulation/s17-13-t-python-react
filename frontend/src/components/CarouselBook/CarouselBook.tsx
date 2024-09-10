'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.carouselBook.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

interface propCarouselBook {
  setOpenModal: (bool: boolean) => void;
}

export default function CarouselBook({ setOpenModal }: propCarouselBook) {
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(false);
    setOpenModal(modal);
  };
  return (
    <>
      <section className="relative py-[70px]">
        <button className="absolute right-6 top-6 text-4xl" onClick={handleModal}>
          ❌
        </button>
        <Swiper
          navigation={true} //Activar la navegacion de < >
          modules={[Navigation]} // Habilitar el modulo de Navigation
          className="mySwiper"
        >
          <SwiperSlide className="w-fit">
            <img title="front" src="/bibliozDetailBook/book-front.png" alt={'cover book front'} />
          </SwiperSlide>
          <SwiperSlide className="w-fit">
            <img title="front" src="/bibliozDetailBook/book-back.png" alt={'cover book front'} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
