import { IoClose } from 'react-icons/io5';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {

  return (
    <div className="fixed inset-0 z-50 min-h-dvh w-full items-center justify-center bg-black/40 text-auxiliary sm:flex">
      <dialog
        className="grid h-full max-h-[32rem] w-full max-w-3xl animate-fade-in-up grid-rows-[auto_auto_1fr] gap-6 rounded-[2.18rem] bg-light px-8 py-4 text-auxiliary"
        open={true}
      >
        <button
          className="interactive-btn justify-self-end hover:text-main"
          title="cerrar formulario de preferencias"
   
          type="button"
        >
          <IoClose size={30} />
        </button>
        <figcaption className="mx-auto max-w-md text-center text-xl font-semibold">
          Para conocerte mejor, seleccioná algunas categorias que te gustaría ver
        </figcaption>
        {children}|
      </dialog>
    </div>
  );
}
