import Carousel from '@/components/Carousel/Carousel';
import SearchBar from '@/components/SearchBar';
import TopTenBooks from '@/app/(main)/_components/TopTenBooks';

interface HomeProps {
  modal: React.ReactNode; 
}
// query params
interface HomeProps {
  
}

export default function Home({ modal }: HomeProps) {
  return (
    <div className="max-w-page px-6 md:px-8">
      <SearchBar />
      <Carousel books={[]} carouselTitle="Tus recomendados" />
      {modal}
      <TopTenBooks />
      <Carousel books={[]} carouselTitle="Agregados recientemente" />
      <Carousel books={[]} carouselTitle="Los más buscados" />
    </div>
  );
}
