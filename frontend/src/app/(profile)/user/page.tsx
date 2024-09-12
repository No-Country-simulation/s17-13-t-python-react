'use client';

import { HiLocationMarker } from 'react-icons/hi';
import { FaUserLarge } from 'react-icons/fa6';
import { ItemInfo } from '@/interfaces/ItemData.interface';
import UserProfileOverview from '@/components/UserProfileOverview';
import Carousel from '@/components/Carousel/Carousel';
import userImage from '/public/avatars/avatar-2.png';
import { useUserStore } from '@/app/store/userStore';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import fetcher from '@/utils/fetcher';
import builderApiUrl from '@/utils/builderApiUrl';
import { url } from 'inspector';

export default function User() {

  const {id, name, email, favorites, recommendations } = useUserStore((state) => ({
    id: state.id,
    name: state.name,
    email: state.email,
    recommendations: state.recommendations,
    favorites: state.favorites,
  }));


  
const Url=builderApiUrl(`profile/${id}`);
fetch(Url).then((res) => {console.log(res)})
// useEffect (() =>{
  
//   const getUser=fetcher(Url).then((response) => {console.log(response);});

//   // console.log(getUser)
// },[])



  
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
