'use client';

import { useState } from 'react';
import ButtonBase from '@/components/ButtonBase';
import { IoShareSocialSharp } from 'react-icons/io5';
import { LiaFacebookF } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

export default function DropdownShare() {
  const [isViewMenu, setIsViewMenu] = useState(false);
  const dropDownStyles =
    'animate-fade-in-up animate-duration-200 absolute top-16 z-10 flex items-center sm:min-w-52 flex-col gap-4 rounded-lg bg-light px-4 py-6 shadow-[0px_4px_4px_0px_#00000040] right-0 sm:left-0';
  const menuItems = [
    { text: 'X', icon: <BsTwitterX />, color: '#000' },
    { text: 'WhatsApp', icon: <FaWhatsapp />, color: '#3EB550' },
    { text: 'Facebook', icon: <LiaFacebookF />, color: '#0962F7' },
    { text: 'Reddit', icon: <FaRedditAlien />, color: '#FE5505' },
  ];

  const handleDropdown = () => setIsViewMenu((prev) => !prev);

  return (
    <div className="relative text-white">
      <ButtonBase
        handleCLick={handleDropdown}
        hoverStyles={true}
        alt="compartir"
        icon={<IoShareSocialSharp size={20} />}
      />
      {isViewMenu && (
        <menu className={dropDownStyles}>
          {menuItems.map(({ icon, text, color }) => (
            <ButtonBase
              key={text}
              style={{ backgroundColor: color }}
              text={text}
              hoverStyles={true}
              alt={`compartir en ${text}`}
              icon={icon}
            />
          ))}
        </menu>
      )}
    </div>
  );
}
