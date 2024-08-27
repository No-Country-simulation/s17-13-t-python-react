"use client"

import { useState } from "react";
import Modal from "./Modal";


export default function Component() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="text-slate-200 bg-zinc-900 outline outline-1  outline-slate-200 rounded-md p-2 m-2 hover:bg-zinc-950 transition"
        onClick={() => setOpenModal(true)}
      >
        Registrarse / Loguearse
      </button>
      {openModal && <Modal setOpenModal={setOpenModal}/>}
    </>
  )
}
