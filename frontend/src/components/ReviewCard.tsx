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

const ReviewCard = ({review} : ReviewCardProps) => {
    return (

        <figure
            className="bg-[#E7E0CF] flex flex-col lg:flex-row items-center lg:items-start m-4 p-4 rounded shadow-md">
            <div
                className="flex flex-col  h-auto max-w-lg items-center lg:items-start   m-4">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    className="rounded-full  sm:h-auto max-w-lg     sm:w-32    "/>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-start items-center">
                <div className="flex flex-col text-center lg:text-left  p-4 gap-1">
                    <figcaption className=" mt-1">
                        <h4 className="font-bold ">{review.name}</h4>
                        <div className="flex justify-center lg:justify-start">
                            <Star size={20} defaultRating={review.rating} color="#264E61"/>
                        </div>
                    </figcaption>
                    <p
                        className={`mt-2 text-ellipsis overflow-hidden text-center text-base md:text-left`}>
                        {review.reviewText}
                    </p>
                </div>
            </div>
            <div className="flex justify-center md:justify-end  mt-4 md:mt-0">
                <p className=" font-bold">{
                        review .date
                            .toLocaleDateString()
                    }</p>
            </div>
        </figure>

    )
}

export default ReviewCard