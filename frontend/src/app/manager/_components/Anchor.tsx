import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Props {
  href: string;
  text: string;
  customClass?: string;
  orientation?: 'back' | 'forward';
}

export default function Anchor({ href, text, customClass, orientation = 'forward' }: Props) {
  const iconStyles = `${orientation === 'back' ? 'group-hover:animate-fade-in-left' : 'group-hover:animate-fade-in-right'} group-hover:animate-duration-1000 group-hover:animate-iteration-count-infinite`;

  return (
    <Link
      className={`group flex w-fit items-center gap-4 text-main ${customClass || ''} ${orientation === 'back' ? 'flex-row-reverse' : ''}`}
      href={href}
    >
      <span className="group-hover:underline">{text}</span>
      {orientation === 'back' ? (
        <FaArrowLeftLong className={iconStyles} />
      ) : (
        <FaArrowRightLong className={iconStyles} />
      )}
    </Link>
  );
}
