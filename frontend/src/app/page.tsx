import Carousel from '@/components/Carousel/Carousel';
import SameAuthorBooks from '@/components/SameAuthorBooks';
import SearchBar from '@/components/SearchBar';
import TopTenBooks from '@/components/TopTenBooks';

export default function Home() {
  return (
    <>
      <SearchBar />
      <Carousel carouselTitle="Tus recomendados" />

      <TopTenBooks />
      <Carousel carouselTitle="Agregados recientemente" />
      <Carousel carouselTitle="Los más buscados" />
    </>
  );
}
