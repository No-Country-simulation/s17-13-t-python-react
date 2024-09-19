'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa6';

interface EditUserPhotoProps {
  photo: string | null;
  setPhoto: (photo: string | null) => void;
}

export default function EditUserPhoto({ photo, setPhoto }: EditUserPhotoProps) {
  const [pickedImage, setPickedImage] = useState<any>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    setPhoto(file);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  if (!photo) return <p className="text-lg font-medium text-[#E7E0CF]">Problema con la imagen</p>;

  return (
    <button
      type="button"
      onClick={handlePickClick}
      className="group relative h-[170px] w-[170px] overflow-hidden rounded-full md:h-[200px] md:w-[200px]"
    >
      <Image
        fill
        src={pickedImage || photo}
        alt="user photo"
        className="block rounded-full object-fill"
      />

      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-2 opacity-0 backdrop-brightness-50 transition-opacity group-hover:opacity-100">
        <FaCamera className="h-[30px] w-[30px] fill-[#E7E0CF]" />
        <p className="w-[110px] text-lg font-medium text-[#E7E0CF]">Cambiar foto de perfil</p>
      </div>

      <input
        id="photo"
        name="photo"
        type="file"
        hidden
        accept="image/png, image/jpeg"
        ref={imageInput}
        onChange={handleImageChange}
      />
    </button>
  );
}
