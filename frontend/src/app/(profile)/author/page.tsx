import Avatar from '@/components/Avatar';
import authorImage from '/public/avatars/avatar-1.png';
import Title from '@/components/Typography/Title';
import Paragraph from '@/components/Typography/Paragraph';

export default function page() {
  const bio =
    'Se conocieron en la escuela y, con el tiempo, el amor floreció entre ellos. Austin se graduó en Harvard y Emily en Princeton. Desde hace años, colaboran en la creación de novelas juveniles y, más recientemente, han logrado un gran éxito en el ámbito del romance contemporáneo. Casados y residentes en Los Ángeles, Emily y Austin encuentran inspiración diaria en su propia historia de amor. "Amor entre páginas" es su primera novela dirigida a adultos.';

  return (
    <div className="mx-auto grid max-w-[81.25rem] grid-cols-1 px-8 pb-8 md:grid-cols-[auto_1fr] md:gap-16">
      <Avatar
        alt="Emily"
        img={authorImage.src}
        customClass="-translate-y-16"
        containerClass="mx-auto size-64 md:size-52"
      />
      <div className="flex flex-col">
        <Title level={2} title="Emily Wibberley y Austin Siegemund-Broka" customClass="py-8" />
        <Paragraph text={bio} type="relaxed" />
      </div>
    </div>
  );
}
