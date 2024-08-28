"use client"

import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(true);

  return (
    <>
      {/* CODIGO PARA PROBAR EL MODAL */}
      <button
        className="text-slate-200 bg-zinc-900 outline outline-1  outline-slate-200 rounded-md p-2 m-2 hover:bg-zinc-950 transition"
        onClick={() => setOpenModal(true)}
      >
        Registrado / Logueado
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}

    </>
  );
}
