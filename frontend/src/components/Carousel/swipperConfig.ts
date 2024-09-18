import { Pagination, Navigation, Autoplay, FreeMode, A11y } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  200: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  400: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  600: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  900: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  1400: {
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
