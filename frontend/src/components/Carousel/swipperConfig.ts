import { Pagination, Navigation, Autoplay, FreeMode, A11y } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  400: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1000: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

export const SwiperConfig: SwiperOptions = {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  speed: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  centeredSlides: true,
  breakpoints: breakpoints,
  modules: [Pagination, Navigation, Autoplay, FreeMode, A11y],
};
