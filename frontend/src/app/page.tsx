import Carousel from '@/components/Carousel/Carousel';
import SearchBar from '@/components/SearchBar';
import TopTenBooks from '@/components/TopTenBooks';
import Modal from '@/components/Modal';

export default function Home() {
  return (
    <div className="max-w-page px-6 md:px-8">
      <SearchBar />
      <Carousel books={[]} carouselTitle="Tus recomendados" />
      <Modal />
      <TopTenBooks />
      <Carousel books={[]} carouselTitle="Agregados recientemente" />
      <Carousel books={[]} carouselTitle="Los más buscados" />
    </div>
  );
}
