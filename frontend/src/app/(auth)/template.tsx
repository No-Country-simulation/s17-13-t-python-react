import Link from 'next/link';

//TODO Definir metadata

interface TemplateProps {
  children: React.ReactNode;
  title: string;
  linkText: string;
  linkPath: string;
}

export default function AuthTemplate({
  title = 'ss',
  children,
  linkPath = '',
  linkText = '',
}: TemplateProps) {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <header className="flex flex-col gap-8">
        <h2 className="text-center text-4xl font-black">{title}</h2>
        <Link href={linkPath}>{linkText}</Link>
      </header>
      {children}
    </section>
  );
}
