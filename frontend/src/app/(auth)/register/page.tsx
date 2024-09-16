import Register from '@/app/(auth)/_components/Register';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
        <h2 className="pb-[36px] pt-[87px] text-4xl font-semibold text-[#E7E0CF]">Registrarme</h2>
      </header>
      <Register />
      <div className="pb-10 text-center md:pb-0">
        <Link
          href="/login"
          className="text-center text-sm text-[#E7E0CF] hover:underline sm:text-base"
        >
          ¿Ya tienes cuenta? <b>Ingresar</b>
        </Link>
      </div>
    </div>
  );
}
