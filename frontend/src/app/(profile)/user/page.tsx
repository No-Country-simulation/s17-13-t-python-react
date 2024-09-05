import Avatar from '@/components/Avatar';
import userImage from '/public/avatars/avatar-2.png';
import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import Title from '@/components/Typography/Title';
import ProfileSummaryList from '@/components/ProfileSummaryList';
import ButtonBase from '@/components/ButtonBase';
import { SummaryItem } from '@/interfaces/SummaryItem.interface';

export default function page() {
  const profileInfoMockup: SummaryItem[] = [
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
    <div className="mx-auto grid max-w-[81.25rem] grid-cols-1 gap-16 px-8 pb-8 md:grid-cols-[auto_1fr] md:gap-16">
      <div className="flex flex-col">
        <Avatar
          alt="Emily"
          img={userImage.src}
          customClass="-translate-y-16"
          containerClass="mx-auto size-64 md:size-52"
        />
        <ProfileSummaryList dataList={profileInfoMockup} />
      </div>
      <div className="flex justify-between py-8">
        <header className="flex flex-col gap-2">
          <Title level={2} title="Clara Romero" />
          <span className="text-xl font-normal">Lector</span>
        </header>
        <ButtonBase text="Editar perfil" />
      </div>
    </div>
  );
}
