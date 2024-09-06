'use client';
import ButtonBase from './ButtonBase';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { ActionType, ThumbButton } from '@/interfaces/ItemData.interface';
import { useThumbsInteraction } from '@/hooks/useThumbsInteraction';

interface Props {
  likes: number;
  disLikes: number;
}

export default function ThumbsUpDownButtons({ disLikes = 0, likes = 0 }: Props) {
  const { action, handleAction } = useThumbsInteraction();
  const buttons: ThumbButton[] = [
    { alt: 'like', icon: <BiSolidLike size={20} className='text-auxiliary'/> },
    { alt: 'dislike', icon: <BiSolidDislike size={20} className='text-auxiliary' /> },
  ];
  const activeStyle = (currentAction: ActionType) => {
    return currentAction === action ? 'opacity-100' : 'opacity-50';
  } 

  return (
    <ul className="flex gap-6">
      {buttons.map(({ alt, icon }) => (
        <li className="flex flex-col items-center text-auxiliary" key={alt}>
          <ButtonBase
            customClass={`bg-transparent shadow-transparent hover:opacity-100  ${activeStyle(alt)}`}
            handleCLick={() => handleAction(alt)}
            hoverStyles={true}
            alt={alt}
            icon={icon}
          />
          <span className="text-base font-normal text-primary">
            {alt === 'like' ? likes : disLikes}
          </span>
        </li>
      ))}
    </ul>
  );
}
