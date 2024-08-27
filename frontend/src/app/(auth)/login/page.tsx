import ButtonMedia from '@/shared/components/ButtonMedia';
import { SocialType } from '@/shared/types/SocialType';
import Login from '@/components/Login';

export default function page() {
  const socialMedia = ['Google', 'Apple', 'Facebook'];
  return (
    <div className="grid h-full w-full max-w-[21.875rem] gap-12">
      <div className="flex flex-col gap-4">
        {socialMedia.map((media) => (
          <ButtonMedia
            key={media}
            socialMedia={media.toLocaleLowerCase() as SocialType}
            text={`Continuar con ${media}`}
          />
        ))}
      </div>
      <Login />
    </div>
  );
}
