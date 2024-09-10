import React from 'react';
import Image from 'next/image';
import Star from './Star';
import Avatar from '../../public/avatars/avatar-2.png';

interface Review {
  name: string;
  imageUrl?: string;
  reviewText: string;
  rating: number;
  date: Date;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <figure className="m-4 flex flex-col items-center rounded bg-[#E7E0CF] p-4 shadow-md lg:flex-row lg:items-start">
      <div className="m-4 flex h-auto max-w-lg flex-col items-center lg:items-start">
        <Image src={Avatar} alt="Avatar" className="max-w-lg rounded-full sm:h-auto sm:w-32" />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-start">
        <div className="flex flex-col gap-1 p-4 text-center lg:text-left">
          <figcaption className="mt-1">
            <h4 className="font-bold">{review.name}</h4>
            <div className="flex justify-center lg:justify-start">
              <Star size={20} defaultRating={review.rating} color="#264E61" />
            </div>
          </figcaption>
          <p className={'mt-2 overflow-hidden text-ellipsis text-center text-base md:text-left'}>
            {review.reviewText}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-center md:mt-0 md:justify-end">
        <p className="font-bold">{review.date.toLocaleDateString()}</p>
      </div>
    </figure>
  );
};

export default ReviewCard;
