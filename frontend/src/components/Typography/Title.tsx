import { Josefin_Sans } from 'next/font/google';

const josefina = Josefin_Sans({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  customClass?: string;
}

export default function Title({ level, customClass, title }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${josefina.className} ${customClass || ''} text-3xl font-semibold`}>
      {title}
    </Tag>
  );
}
