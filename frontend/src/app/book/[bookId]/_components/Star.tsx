'use client';

import React, { useMemo, useState } from 'react';
import { GoStarFill } from 'react-icons/go';

////////////////////////////

interface StarProps {
  size?: number;
  color?: string;
  emptyStarColor?: string;
  defaultRating?: number;
  maxRating?: number;
}

interface StarIconProps {
  size: number;
  color: string;
  emptyStarColor: string;
  full: boolean;
}

////////////////////////////

export default function Star({
  size = 30,
  color = '#fcc419',
  emptyStarColor = '#ADADAD',
  defaultRating = 0,
  maxRating = 5,
}: StarProps) {
  const [rating, setRating] = useState<number>(defaultRating);

  const stars = useMemo(() => {
    return Array.from({ length: +maxRating }, (_, i) => (
      <StarIcon
        key={i}
        size={size}
        color={color}
        emptyStarColor={emptyStarColor}
        full={rating >= i + 1}
      />
    ));
  }, [rating, size, color, emptyStarColor, maxRating]);

  return <React.Fragment>{stars}</React.Fragment>;
}

function StarIcon({ size, color, emptyStarColor, full }: StarIconProps) {
  return (
    <React.Fragment>
      {full ? (
        <GoStarFill color={color} style={{ fontSize: `${size}px` }} />
      ) : (
        <GoStarFill color={emptyStarColor} style={{ fontSize: `${size}px` }} />
      )}
    </React.Fragment>
  );
}
