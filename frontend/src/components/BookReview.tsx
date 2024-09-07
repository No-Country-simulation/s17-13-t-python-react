import React from 'react'
import Title from './Typography/Title'

import ReviewCard from './ReviewCard';



interface Review {
    name: string;
    imageUrl: string;
    reviewText: string;
    rating: number;
    date: Date;
}

const BookReview = () => {

  const reviews: Review[] = [
    {
      name: 'Juliana Serrano',
      imageUrl: '',
      reviewText: 'A fantastic novel set in the Jazz Age, a great celebratory banquet attended by the other starving animals. Mr. Fox uses his underground passages to help his family survive.',
      rating: 4,
      date: new Date(),
    },

  ];
  

    return (
      <section className = "p-3 " >
         <div className="m-12 ">
            <Title level={2} title="Reseña"/>
        </div>
        <div className=" m-12">      
          {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
          <div className="flex justify-end m-2 mr-10">
              <button className=" ">Ver todas</button>
          </div>
          </div>
      </section>
      )
}

export default BookReview