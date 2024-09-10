"use client"

import { useState } from "react";
import CarouselBook from "./CarouselBook/CarouselBook";
import BookOverview from "./BookOverview";

export default function DetailBook({book}: {book: any}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };

  return (
    <>
      {isModalOpen && (
        <section className='bg-white outline-slate-800 w-full absolute z-40 top-30 left-0'>
          <CarouselBook setOpenModal={(isOpen) => handleModal(isOpen)} />
        </section>
      )}
      <section className="mt-8">
        <BookOverview book={book} setOpenModal={(isOpen) => handleModal(isOpen)} />
      </section>
    </>
  )
}
