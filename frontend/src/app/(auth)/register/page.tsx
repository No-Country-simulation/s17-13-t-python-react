import Register from '@/components/Register';
import Link from 'next/link';
import '@/styles/Auth.css';

export default function page() {
  return (
    <section className="background-fondo h-full">
      <div className="m-auto flex max-w-7xl justify-end md:py-12 md:pr-20">
        <section className="flex h-full w-full items-start justify-center bg-[#e7e0cf10] backdrop-blur-[50px] md:h-[650px] md:w-[600px] md:rounded-[35px]">
          <div>
            <header className="flex w-full max-w-[21.875rem] flex-col items-center justify-center gap-4">
              <h2 className="pb-[36px] pt-[87px] text-4xl font-semibold text-[#E7E0CF]">
                Registrarme
              </h2>
            </header>
            <Register />
            <div className="pb-10 text-center md:pb-0">
              <Link href="/login" className="text-center text-sm text-[#E7E0CF] sm:text-base">
                ¿Ya tienes cuenta? <b>Ingresar</b>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
