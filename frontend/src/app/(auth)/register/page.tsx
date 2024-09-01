import Register from '@/components/Register';
import Link from 'next/link';

export default function page() {
  return (
    <section className="flex h-full w-full flex-col items-center gap-14 py-12">
      <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-black">Registrarse</h2>
        <Link href="/login" className="pb-2 text-sm font-medium underline sm:text-lg">
          ¿Ya tienes cuenta? Ingresar
        </Link>
      </header>
      <Register />
    </section>
  );
}
