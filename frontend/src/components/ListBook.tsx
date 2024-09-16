import Book from './Book';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';

interface Props {
  book: GetBookResponse[];
}

export default function ListBook({ book }: Props) {
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-20 sm:justify-normal sm:gap-10 md:gap-x-20 md:gap-y-32">
      {book.map((book) => (
        <Book key={book.id} name={book.title} url={book.img} bookId={book.id} />
      ))}
    </div>
  );
}
