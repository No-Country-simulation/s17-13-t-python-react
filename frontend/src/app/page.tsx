
import Carousel from '@/components/Carousel/Carousel';
import TopTenBooks from '@/components/TopTenBooks';

export default function Home() {
  return (
    <>
      <Carousel carouselTitle="Tus recomendados" />
      <TopTenBooks /> 
      <Carousel carouselTitle="Agregados recientemente" />
      <Carousel carouselTitle="Los más buscados" />
    </>
  );
}
