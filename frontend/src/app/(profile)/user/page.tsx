'use client';

import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import UserProfileOverview from '@/components/UserProfileOverview';
import Carousel from '@/components/Carousel/Carousel';
import userImage from '/public/avatars/avatar-2.png';
import { useUserStore } from '@/app/store/userStore';
import { useEffect, useState } from 'react';
import builderApiUrl from '@/utils/builderApiUrl';

interface UserResponse {
  img: string | null;
  biography: string | null;
  user: {
    name: string;
    email: string;
  };
}

export default function User() {
  const [user, setUser] = useState<UserResponse | null>(null);

  const { id, name, email, favorites, recommendations, setBasicInfo } = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    email: state.email,
    recommendations: state.recommendations,
    favorites: state.favorites,
    setBasicInfo: state.setBasicInfo,
  }));

  const url = builderApiUrl(`profile/${id}`);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: UserResponse = await response.json();
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

  const profileInfoMockup: ItemInfo[] = [
    {
      icon: <HiLocationMarker size={25} />,
      text: 'Buenos Aires, Argentina',
    },
    {
      icon: <FaUserLarge size={22} />,
      text: user ? `@${user.user.name}` : '@Ana_torrez', 
    },
  ];

  const userNameMockup = user ? user.user.name : 'Clara Romero'; 


  return (
    <>
      <UserProfileOverview
        dataUser={profileInfoMockup}
        image={user && user.img ? user.img : userImage.src} 
        userName={userNameMockup}
      />
      <Carousel books={recommendations} carouselTitle="Mis recomendaciones" />
      <Carousel books={favorites} carouselTitle="Mis favoritos" />
    </>
  );
}
