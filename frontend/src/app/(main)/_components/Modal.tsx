'use client';

import { GetGenreResponse } from '@/app/manager/_validators/genreSchema';
import { useModalStore } from '@/app/store/modalStore';
import fetcher from '@/utils/fetcher';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import PreferencesForm from './PreferencesForm';

export default function Modal() {
  const [genders, setGenders] = useState<GetGenreResponse[]>([]);
  const { isView, toggleModal } = useModalStore((state) => ({
    isView: state.isView,
    toggleModal: state.toggleModal,
  }));

  useEffect(() => {
    fetcher<GetGenreResponse[]>('/genre/').then((response) => {
      if (typeof response === 'string') {
        setGenders([]);
      } else {
        setGenders(response);
      }
    });
  }, []);

  if (isView) return null;

  return (
    <div className="fixed inset-0 z-50 min-h-dvh w-full items-center justify-center bg-black/40 text-auxiliary sm:flex">
      <dialog
        className="grid h-full max-h-[32rem] w-full max-w-3xl animate-fade-in-up grid-rows-[auto_auto_1fr] gap-10 rounded-[2.18rem] bg-light px-8 py-4 text-auxiliary"
        open={isView}
      >
        <button
          onClick={toggleModal}
          className="interactive-btn justify-self-end hover:text-main"
          title="cerrar formulario de preferencias"
          type="button"
        >
          <IoClose size={30} />
        </button>
        <figcaption className="mx-auto max-w-md text-center text-xl font-semibold">
          Para conocerte mejor, seleccioná algunas categorias que te gustaría ver
        </figcaption>
        {genders.length > 0 && <PreferencesForm genders={genders} />}
      </dialog>
    </div>
  );
}
