'use client';

import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import UserProfileOverview from '../_components/UserProfileOverview';
import { useUserStore } from '@/app/store/userStore';
import { useEffect, useState } from 'react';
import builderApiUrl from '@/utils/builderApiUrl';
import { UserEdit } from '@/libs/editUser.action';

interface UserResponse extends UserEdit {}

export default function User() {
  const [user, setUser] = useState<UserResponse | null>(null);

  const { id, name, city, setBasicInfo, img } = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    email: state.email,
    city: state.city,
    setBasicInfo: state.setBasicInfo,
    img: state.img,
  }));

  const url = builderApiUrl(`profile/${id}`);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: UserResponse = await response.json();
        setBasicInfo({
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          city: data.city,
          isLogged: true,
          role: 'user',
          img: data.img,
        });
        setUser(data);
      } else {
        console.error('Error en la respuesta', response.status);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const profileInfo: ItemInfo[] = [
    {
      icon: <HiLocationMarker size={25} />,
      text: city || 'ciudad por definir',
    },
    {
      icon: <FaUserLarge size={22} />,
      text: name ? `@${name}` : '@Unknow user',
    },
  ];

  return (
    <>
      <UserProfileOverview
        dataUser={profileInfo}
        image={user && img}
        userName={name ? name : 'Unknown User'}
      />
    </>
  );
}
