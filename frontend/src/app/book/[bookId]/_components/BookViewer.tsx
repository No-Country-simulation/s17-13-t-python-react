import { IoClose } from 'react-icons/io5';
import { ViewerBook } from '@/interfaces/Book.interface';

export default function BookViewer({ handlerViewer, images, title }: ViewerBook) {
  return (
    <div className="grid">
      <button
        className="interactive-btn mr-2 justify-self-end hover:text-main md:mr-8"
        title="cerrar visualizador de libros"
        onClick={handlerViewer}
        type="button"
      >
        <IoClose size={40} />
      </button>
      <figure className="flex animate-fade-in-up flex-wrap items-center justify-evenly gap-20 px-2">
        {images.map((book) => (
          <img
            className="h-72 w-48 shadow-[0px_6px_4px_0px_#00000040] md:h-96 md:w-64 xl:h-[35rem] xl:w-[25rem]"
            key={book}
            src={book}
            alt={`cover ${title}`}
          />
        ))}
        <figcaption className="sr-only">{`Portada y contraportada del libro  ${title}`}</figcaption>
      </figure>
    </div>
  );
}
