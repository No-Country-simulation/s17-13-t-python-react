import Avatar from './Avatar';
import { FaRegEdit } from 'react-icons/fa';
import ButtonBase from './ButtonBase';
import ProfileSummaryList from './ProfileSummaryList';
import Title from './Typography/Title';
import { ItemInfo } from '@/interfaces/ItemData.interface';

interface Props {
  userName: string;
  dataUser: ItemInfo[];
  image: string | null;
}

export default function UserProfileOverview({ image, dataUser, userName }: Props) {
  return (
    <div className="mx-auto grid max-w-[85rem] grid-cols-1 pb-8 md:grid-cols-[auto_1fr] md:gap-x-16">
       {image !== null ?    <Avatar
            alt="Emily"
            img={image}
            customClass="-translate-y-16"
            containerClass="mx-auto size-40 xs:size-64 row-[1/2] col-[1/3] md:size-52 md:col-[1/2]"
          />
       : 
        <div>
          <p>imagen no encontrada</p>
        </div>
      }

      <ProfileSummaryList dataList={dataUser} customClass="row-[3/4] md:row-[2/3]" />
      <div className="row-[2/3] flex justify-between pb-8 md:col-[2/3] md:row-[1/2] md:py-8">
        <header className="flex flex-col">
          <Title level={2} title={userName} />
          <span className="text-xl font-normal">Lector</span>
        </header>
        <ButtonBase text="Editar perfil" icon={<FaRegEdit />} alt="Editar perfil" />
      </div>
    </div>
  );
}
