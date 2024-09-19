import Image from 'next/image';
import Star from './Star';
import defaultAvatar from '/public/avatars/no-user.webp';
import { ReviewResponse } from '@/app/manager/_validators/reviewSchema';

interface ReviewCardProps {
  review: ReviewResponse;
  user: string;
}

const ReviewCard = ({ review, user }: ReviewCardProps) => {
  const date = new Date().toLocaleDateString('es-ES');

  return (
    <figure className="flex flex-col items-center rounded bg-[#E7E0CF] p-4 shadow-md lg:flex-row lg:items-start">
      <div className="m-4 flex h-auto max-w-lg flex-col items-center lg:items-start">
        <Image
          src={defaultAvatar}
          alt="Avatar"
          className="max-w-lg rounded-full sm:h-auto sm:w-32"
        />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-start">
        <div className="flex flex-col gap-1 p-4 text-center lg:text-left">
          <figcaption className="mt-1">
            <div className="font-bold">{user}</div>
            <div className="flex justify-center lg:justify-start">
              <Star size={20} defaultRating={Number(review.rating)} color="#264E61" />
            </div>
          </figcaption>
          <p className={'mt-2 overflow-hidden text-ellipsis text-center text-base md:text-left'}>
            {review.comment}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-center md:mt-0 md:justify-end">
        <p className="font-bold">{date}</p>
      </div>
    </figure>
  );
};

export default ReviewCard;
