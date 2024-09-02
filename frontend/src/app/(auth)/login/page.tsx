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
    <section className="flex h-full w-full flex-col items-center gap-14 py-12">
      <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-black">Iniciar sesión</h2>
        <Link href="/register" className="pb-2 text-sm font-medium underline sm:text-lg">
          ¿No tenés cuenta? Registrate
        </Link>
        <div className="flex items-center justify-center gap-8">
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
    </section>
  );
}
