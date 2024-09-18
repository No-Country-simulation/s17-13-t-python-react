'use client';

import ButtonBase from '@/components/ButtonBase';
import ThumbsUpDownButtons from './ThumbsUpDownButtons';
import DropdownShare from './DropdownShare';
import ButtonFavorite from './ButtonFavorite';
import Link from 'next/link';
import { useUserStore } from '@/app/store/userStore';

interface Props {
  bookId: number;
}

export default function BookOptionsBar({ bookId }: Props) {
  const { isLogged } = useUserStore((state) => ({ isLogged: state.isLogged }));

  return (
    <nav>
      <ul className="mx-auto grid w-fit auto-cols-auto grid-flow-col place-items-center gap-x-4 gap-y-10 text-white md:mx-0">
        <li className="contents">
          <Link href={`/author/${bookId}`}>
            <ButtonBase
              customClass="px-4"
              hoverStyles={true}
              text="Sobre el autor"
              alt="Información sobre el autor"
            />
          </Link>
        </li>
        {isLogged && (
          <li className="contents">
            <ButtonBase
              customClass="col-[3/5] sm:col-auto sm:row-auto px-4"
              hoverStyles={true}
              text="Reseñar"
              alt="Dar reseña"
            />
          </li>
        )}
        <li className="col-[4/5] row-[2/3] sm:col-auto sm:row-auto">
          <DropdownShare />
        </li>
        {isLogged && (
          <>
            <li className="col-[3/4] row-[2/3] sm:col-auto sm:row-auto">
              <ButtonFavorite />
            </li>
            <li className="col-[1/2] row-[2/3] sm:col-auto sm:row-auto">
              <ThumbsUpDownButtons disLikes={0} likes={0} />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
