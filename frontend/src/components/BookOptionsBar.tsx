import ButtonBase from './ButtonBase';
import ThumbsUpDownButtons from './ThumbsUpDownButtons';
import DropdownShare from './DropdownShare';
import ButtonFavorite from './ButtonFavorite';
import Link from 'next/link';
import { ItemBar } from '@/interfaces/ItemData.interface';

export default function BookOptionsBar() {
  const navbarItems: Partial<ItemBar>[] = [
    { text: 'Sobre el autor', alt: 'Información sobre el autor' },
    { text: 'Reseñar', alt: 'Dar reseña' },
  ];

  return (
    <nav>
      <ul className="mx-auto grid w-fit auto-cols-auto grid-flow-col place-items-center gap-x-4 gap-y-10 text-white md:mx-0">
        {navbarItems.map(({ alt, text }, i) => (
          <li key={i} className="contents">
            <Link href="/" className="contents">
              <ButtonBase
                customClass={`px-4 ${i === 1 && 'col-[3/5] sm:col-auto sm:row-auto'}`}
                hoverStyles={true}
                text={text}
                alt={alt}
              />
            </Link>
          </li>
        ))}
        <li className="col-[4/5] row-[2/3] sm:col-auto sm:row-auto">
          <DropdownShare />
        </li>
        <li className="col-[3/4] row-[2/3] sm:col-auto sm:row-auto">
          <ButtonFavorite />
        </li>
        <li className="col-[1/2] row-[2/3] sm:col-auto sm:row-auto">
          <ThumbsUpDownButtons disLikes={0} likes={0} />
        </li>
      </ul>
    </nav>
  );
}
