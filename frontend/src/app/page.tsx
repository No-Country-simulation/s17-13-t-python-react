'use client';

import Modal from '@/components/Modal';
import { useState } from 'react';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(true);

  return (
    <>
      {/* CODIGO PARA PROBAR EL MODAL */}
      <button
        className="m-2 rounded-md bg-zinc-900 p-2 text-slate-200 outline outline-1 outline-slate-200 transition hover:bg-zinc-950"
        onClick={() => setOpenModal(true)}
      >
        Registrado / Logueado
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
}
