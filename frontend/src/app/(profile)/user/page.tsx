import Avatar from '@/components/Avatar';
import userImage from '/public/avatars/avatar-2.png';
import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import Title from '@/components/Typography/Title';
import ProfileSummaryList from '@/components/ProfileSummaryList';
import ButtonBase from '@/components/ButtonBase';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import { FaRegEdit } from 'react-icons/fa';

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

  return (
    <div className="mx-auto grid max-w-[81.25rem] grid-cols-1 px-8 pb-8 md:grid-cols-[auto_1fr] md:gap-x-16">
      <Avatar
        alt="Emily"
        img={userImage.src}
        customClass="-translate-y-16"
        containerClass="mx-auto size-64 row-[1/2] col-[1/3] md:size-52 md:col-[1/2]"
      />
      <ProfileSummaryList dataList={profileInfoMockup} customClass="row-[3/4] md:row-[2/3]" />
      <div className="row-[2/3] flex justify-between pb-8 md:col-[2/3] md:row-[1/2] md:py-8">
        <header className="flex flex-col">
          <Title level={2} title="Clara Romero" />
          <span className="text-xl font-normal">Lector</span>
        </header>
        <ButtonBase text="Editar perfil" icon={<FaRegEdit />} alt="Editar perfil" />
      </div>
    </div>
  );
}
