import ButtonMedia from '@/components/ButtonMedia';
import Login from '@/components/Login';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa6';
import { LiaFacebookF } from 'react-icons/lia';

interface Btn {
  icon: JSX.Element;
  backgroundBtn: string;
  title: string;
}

export default function page() {
  const icons: Btn[] = [
    {
      icon: <LiaFacebookF className="size-full" color="#fff" />,
      title: 'facebook',
      backgroundBtn: '#1877f2',
    },
    {
      icon: <FcGoogle className="size-full" />,
      title: 'google',
      backgroundBtn: '#fff',
    },
    {
      icon: <FaApple className="size-full bg-black" color="#fff" />,
      title: 'apple',
      backgroundBtn: '#000',
    },
  ];

  return (
    <div>
      <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
        <h2 className="pb-[61px] pt-[87px] text-4xl font-semibold text-[#E7E0CF]">
          Iniciar sesión
        </h2>
        <div className="flex items-center justify-center gap-8 pb-10">
          {icons.map(({ backgroundBtn, icon, title }) => (
            <ButtonMedia
              key={title}
              iconNode={icon}
              size={52}
              background={backgroundBtn}
              text={title}
            />
          ))}
        </div>
      </header>
      <Login />
      <div className="pb-10 text-center md:pb-0">
        <Link href="/register" className="text-center text-sm text-[#E7E0CF] sm:text-base hover:underline">
          Aún no tengo cuenta, <b>registrarme</b>
        </Link>
      </div>
    </div>
  );
}
