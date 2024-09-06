import React from 'react'
import Title from './Typography/Title'
import Avatar from '../../public/avatars/avatar-2.png';
import Image from 'next/image';
import Star from './Star';
import {Roboto} from 'next/font/google';



interface Review {
    name: string;
    ImageUrl: string;
    reviewText: string;
    rating: number;
    date: Date;
}

const roboto = Roboto({
    weight: [
        '100', '300', '400', '500', '700'
    ],
    subsets: ['latin'],
    display: 'swap'
});

const BookReview = () => {

  const reviews: Review[] = [
    {
      name: 'Juliana Serrano',
      ImageUrl: '',
      reviewText: 'A fantastic novel set in the Jazz Age, a great celebratory banquet attended by the other starving animals. Mr. Fox uses his underground passages to help his family survive.',
      rating: 4,
      date: new Date(),
    },
    {
      name: 'Carlos Rivera',
      ImageUrl: '',
      reviewText: 'An intriguing mystery novel that keeps you on edge until the very last page. The characters are well-developed, and the twists and turns make it an exciting read.',
      rating: 5,
      date: new Date('2024-01-15'),
    },
    {
      name: 'Ana López',
      ImageUrl: '',
      reviewText: 'A deeply moving story about love, loss, and the passage of time. The author paints a vivid picture of the emotions involved, making it a truly unforgettable experience.',
      rating: 4,
      date: new Date('2023-11-22'),
    },

  ];
  

    return (
      <section className = "p-3 " >
         <div className="m-12 ">
            <Title level={1} title="Reseña"/>
        </div>
          <div className=" m-12">
          {reviews.map((review,index) =>(
                  <div className="">

              <div className="bg-[#E7E0CF] flex flex-col lg:flex-row items-center lg:items-start m-4 p-4 rounded shadow-md">
         
                          <div className="flex flex-col  h-auto max-w-lg items-center lg:items-start   m-4">
                          <Image
                              src={Avatar}
                              alt="Avatar"
                              className="rounded-full  sm:h-auto max-w-lg     sm:w-32    "/> 
                      </div>
                      <div className="flex flex-col lg:flex-row lg:justify-start items-center">
                          <div className="flex flex-col text-center lg:text-left  p-4 gap-1">
                              <div className=" mt-1">
                                  <h2 className="font-bold ">{review.name}</h2>
                                  <div className="flex justify-center lg:justify-start">
                                      <Star size={20} defaultRating={review.rating} color="#264E61"/>
                                  </div>
                              </div>
                              <p className={`mt-2 text-ellipsis overflow-hidden text-center text-base font-bold md:text-left ${roboto.className}`}>
                                  {review.reviewText}
                              </p>
                          </div>
                      </div>  
                      <div className="flex justify-center md:justify-end  mt-4 md:mt-0">
                          <p className="${roboto.className} font-bold">{review.date.toLocaleDateString()}</p>
                      </div>
                              </div>
                              </div>
                ))}
          
             
        
          <div className="flex justify-end m-2 mr-10">
              <button className=" ${roboto.className}">Ver todas</button>
          </div>
          </div>
      

      </section>
      )
}

export default BookReview