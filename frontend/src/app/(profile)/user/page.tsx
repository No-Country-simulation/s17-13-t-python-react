'use client';

import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import UserProfileOverview from '@/components/UserProfileOverview';
import Carousel from '@/components/Carousel/Carousel';
import userImage from '/public/avatars/avatar-2.png';
import { useUserStore } from '@/app/store/userStore';
import { useEffect } from 'react';
import axios from 'axios';

export default function User() {
  const { name, email, favorites, recommendations } = useUserStore((state) => ({
    name: state.name,
    email: state.email,
    recommendations: state.recommendations,
    favorites: state.favorites,
  }));

 
  console.log(useUserStore.getState());  
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
      <Carousel books={recommendations} carouselTitle="Mis recomendaciones" />
      <Carousel books={favorites} carouselTitle="Mis favoritos" />
    </>
  );
}
