'use client';

import React, { useState } from 'react';
import EditUserPhoto from './EditUserPhoto';
import EditUserProfileForm from './EditUserProfileForm';

interface EditUserProfileProps {
  image: string | null;
  setEditProfile: (edit: boolean) => void;
}

export default function EditUserProfile({ image, setEditProfile }: EditUserProfileProps) {
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <div className="absolute left-[0px] top-0 flex h-[600px] w-[100%] items-center justify-center bg-[#47242A] md:h-[498px]">
      <div className="grid h-[100%] max-w-[65rem] flex-grow grid-cols-[1fr] grid-rows-[auto_auto] justify-between px-4 py-4 md:h-[90%] md:grid-cols-[auto_1fr] md:grid-rows-[auto] md:justify-normal md:gap-x-4 md:pb-0 md:pt-11">
        <div className="col-[1/-1] row-[1/2] flex flex-col items-center justify-center md:col-[1/2] md:row-[1/2] md:mt-[-40px] md:block md:text-center">
          <h3 className="mb-5 text-4xl font-semibold text-[#E7E0CF]">Mi perfil</h3>
          <EditUserPhoto photo={image} setPhoto={setPhoto} />
        </div>

        <div className="col-[1/-1] row-[2/3] flex justify-center md:col-[2/-1] md:row-[1/2] md:pl-10">
          <EditUserProfileForm setEditProfile={setEditProfile} photo={photo} />
        </div>
      </div>
    </div>
  );
}

// md:mt-[-50px]
