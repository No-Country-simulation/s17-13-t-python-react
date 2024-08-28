import { SocialType } from '../types/SocialType';
import FacebookSvg from '../icons/FacebookSvg';
import AppleSvg from '../icons/AppleSvg';
import GoogleSvg from '../icons/GoogleSvg';

interface Props {
  text: string;
  socialMedia: SocialType;
}

export default function ButtonMedia({ socialMedia, text }: Props) {
  return (
    <button
      title={`Ingresar con ${socialMedia}`}
      className="flex h-9 w-full max-w-[21.875rem] items-center justify-center gap-4 rounded-3xl border-[.1rem] border-[#1E1E1E] bg-[#F1F1F1] px-2 text-sm font-medium shadow-btn sm:text-lg"
      type="button"
    >
      {socialMedia === 'apple' && <AppleSvg />}
      {socialMedia === 'facebook' && <FacebookSvg />}
      {socialMedia === 'google' && <GoogleSvg />}
      <span>{text}</span>
    </button>
  );
}
