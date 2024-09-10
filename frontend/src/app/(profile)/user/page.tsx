import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import UserProfileOverview from '@/components/UserProfileOverview';
import Carousel from '@/components/Carousel/Carousel';
import userImage from '/public/avatars/avatar-2.png';

export default function page() {
  const profileInfoMockup: ItemInfo[] = [
    {
      icon: <HiLocationMarker size={25} />,
      text: 'Buenos Aires, Argentina',
    },
    {
      icon: <FaUserLarge size={22} />,
      text: '@Ana_torrez',
    },
  ];
  const userNameMockup = 'Clara Romero';

  return (
    <>
      <UserProfileOverview
        dataUser={profileInfoMockup}
        image={userImage.src}
        userName={userNameMockup}
      />
      <Carousel carouselTitle="Mis recomendaciones" />
      <Carousel carouselTitle="Mis favoritos" />
    </>
  );
}
