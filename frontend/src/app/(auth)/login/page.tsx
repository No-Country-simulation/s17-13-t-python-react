import ButtonMedia from '@/shared/components/ButtonMedia';
import { SocialType } from '@/shared/types/SocialType';
import Login from '@/components/Login';
import Link from 'next/link';

export default function page() {
  const socialMedia = ['Google', 'Apple', 'Facebook'];
  return (
    <section className="flex h-full w-full flex-col items-center gap-14 py-8">
      <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-black">Iniciar sesión</h2>
        <Link href="/register" className="pb-2 text-sm font-medium underline sm:text-lg">
          ¿No tenés cuenta? Registrate
        </Link>
        <div className="flex w-full max-w-[21.875rem] flex-col gap-6">
          {socialMedia.map((media) => (
            <ButtonMedia
              key={media}
              socialMedia={media.toLocaleLowerCase() as SocialType}
              text={`Continuar con ${media}`}
            />
          ))}
        </div>
      </header>
      <Login />
    </section>
  );
}
