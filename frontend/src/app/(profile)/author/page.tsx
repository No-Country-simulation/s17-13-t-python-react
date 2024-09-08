import authorImage from '/public/avatars/avatar-1.png';
import Carousel from '@/components/Carousel/Carousel';
import AuthorProfileOverview from '@/components/AuthorProfileOverview';

export default function page() {
  const bio =
    'Se conocieron en la escuela y, con el tiempo, el amor floreció entre ellos. Austin se graduó en Harvard y Emily en Princeton. Desde hace años, colaboran en la creación de novelas juveniles y, más recientemente, han logrado un gran éxito en el ámbito del romance contemporáneo. Casados y residentes en Los Ángeles, Emily y Austin encuentran inspiración diaria en su propia historia de amor. "Amor entre páginas" es su primera novela dirigida a adultos.';
  const authorName = 'Emily Wibberley y Austin Siegemund-Broka';

  return (
    <>
      <AuthorProfileOverview bio={bio} image={authorImage.src} name={authorName} />
      <div className="py-8">
        <Carousel carouselTitle="Sus libros" />
      </div>
    </>
  );
}
