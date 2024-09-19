import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import Image from 'next/image';

interface TopTenBooksItemProps {
  book: GetBookResponse;
  index: number;
}

export default function TopTenBooksItem({ book, index }: TopTenBooksItemProps) {
  return (
    <li className="ease inline-block h-full w-full overflow-hidden transition duration-[2s]">
      <div className="absolute flex h-full w-full flex-col items-center justify-center px-4 py-4">
        {book.img && (
          <Image src={book.img} quality={80} width={130} height={130} alt={book.title} />
        )}

        <h2 className="mb-1 mt-4 text-xl font-bold">Top {index}</h2>
        <h3 className="text-lg font-semibold">{book.title}</h3>
      </div>
    </li>
  );
}
