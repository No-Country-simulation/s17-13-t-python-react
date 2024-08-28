"use client"

import { propModal } from "@/interfaces/modal";
import { useState } from "react"
import OptionModal from "./OptionModal";
import { options } from "@/utils/modal";
import '../styles/Modal.css'


export default function Modal({ setOpenModal }: propModal) {
  const [preference, setPreference] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  // Hace el "toggle" en cada opcion
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedItems((prev => ({ ...prev, [id]: checked })));
  }

  // Agrega los gustos dependiendo del estado de cada opcion
  const preferenceModalHandler = (text: string, status: boolean) => {
    status 
      ? setPreference((prev => ([...prev, text])))
      : setPreference((prev => prev.filter(txt => txt !== text)))
  }

  // Mostrar gustos por consola y cerrar modal
  const sendGustos = () => {
    console.log(preference) // ESTO SERIAN LOS DATOS A ENVIAR AL BACKEND
    setOpenModal(false)
  }

  return (
    <>
      <section className="min-h-screen w-full sm:flex justify-center items-center absolute sm:fixed top-0 left-0 bg-black/60">
        <div className="w-full sm:w-fit sm:flex sm:flex-col sm:items-center gap-5 relative bg-[#EEE4F7] sm:rounded-[25px] pb-4 pt-14 sm:pt-10">
          <button className="absolute right-5 top-3 font-extrabold text-2xl text-[#49454F]"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
          <h4 className="sm:w-[434px] text-[#1E1E1E] text-xl text-center font-bold px-4 sm:px-0">
            Para conocerte mejor, seleccioná algunas categorias que te gustaría ver
          </h4>
          <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-4 sm:gap-y-10 p-5 px-4 sm:px-14">
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
          <div className="flex justify-end w-full px-4 sm:px-14">
            <button
              onClick={sendGustos} 
              className="bg-[#1E1E1E] text-white w-full sm:w-[145px] h-[45px] grid place-items-center rounded-full">
              Continuar
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
