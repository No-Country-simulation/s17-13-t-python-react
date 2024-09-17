'use client';

import ButtonBase from '@/components/ButtonBase';
import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

export default function ButtonFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => setIsFavorite((prev) => !prev);

  return (
    <ButtonBase
      hoverStyles={true}
      alt={isFavorite ? 'quitar de favoritos' : 'marcar como favorito'}
      handleCLick={handleFavorite}
      icon={
        isFavorite ? (
          <IoMdHeart className="animate-zoom-in animate-duration-200" />
        ) : (
          <IoMdHeartEmpty />
        )
      }
    />
  );
}
