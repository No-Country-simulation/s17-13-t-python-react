import Carousel from '@/components/Carousel/Carousel';
import SearchBar from '@/components/SearchBar';
import TopTenBooks from '@/components/TopTenBooks';
import Modal from '@/components/Modal';
import { useModalStore } from './store/modalStore';

export default function Home() {

  return (
    <div className="mx-auto w-full max-w-[85rem] px-4 md:px-8">
      <SearchBar />
      <Carousel books={[]} carouselTitle="Tus recomendados" />
      <Modal />
      <TopTenBooks />
      <Carousel books={[]} carouselTitle="Agregados recientemente" />
      <Carousel books={[]} carouselTitle="Los más buscados" />
    </div>
  );
}
