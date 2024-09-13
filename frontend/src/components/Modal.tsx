'use client';

import { propModal } from '@/interfaces/modal';
import { useState } from 'react';
import OptionModal from './OptionModal';
import { options } from '@/utils/modal';
import '../styles/Modal.css';
import { useModalStore } from '@/app/store/modalStore';

export default function Modal({ setOpenModal }: Partial<propModal>) {
  const { toggleModal, isView } = useModalStore((state) => ({
    toggleModal: state.toggleModal,
    isView: state.isView,
  }));
  const [preference, setPreference] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  // Hace el "toggle" en cada opcion
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
  };

  // Agrega los gustos dependiendo del estado de cada opcion
  const preferenceModalHandler = (text: string, status: boolean) => {
    status
      ? setPreference((prev) => [...prev, text])
      : setPreference((prev) => prev.filter((txt) => txt !== text));
  };

  // Mostrar gustos por consola y cerrar modal
  const sendPreference = () => {
    console.log(preference); // ESTO SERIAN LOS DATOS A ENVIAR AL BACKEND
    // setOpenModal(false);
    toggleModal();
  };

  if (!isView) return;

  return (
    <>
      <section className="absolute left-0 top-0 z-50 min-h-screen w-full items-center justify-center bg-black/60 sm:fixed sm:flex">
        <div className="relative w-full gap-5 bg-[#EEE4F7] pb-4 pt-14 sm:flex sm:w-fit sm:flex-col sm:items-center sm:rounded-[25px] sm:pt-10">
          <button
            className="absolute right-5 top-3 text-2xl font-extrabold text-[#49454F]"
            onClick={() => toggleModal()}
          >
            ✕
          </button>
          <h4 className="px-4 text-center text-xl font-bold text-[#1E1E1E] sm:w-[434px] sm:px-0">
            Para conocerte mejor, seleccioná algunas categorias que te gustaría ver
          </h4>
          <section className="grid grid-cols-1 gap-4 gap-y-4 p-5 px-4 sm:grid-cols-3 sm:gap-y-10 sm:px-14 md:grid-cols-4">
            {options.map((option, i) => (
              <OptionModal
                key={i}
                option={option}
                checkedItems={checkedItems}
                handleCheck={handleCheck}
                preferenceModalHandler={preferenceModalHandler}
              />
            ))}
          </section>
          <div className="flex w-full justify-end px-4 sm:px-14">
            <button
              onClick={sendPreference}
              className="grid h-[45px] w-full place-items-center rounded-full bg-[#1E1E1E] text-white sm:w-[145px]"
            >
              Continuar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
