"use client"

import { propModal } from "@/interfaces/modal";
import { useState } from "react"
import "./Modal.css"


export default function Modal({ setOpenModal }: propModal) {
  const [gustos, setGustos] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    paseador1: false,
    paseador2: false,
    paseador3: false,
    paseador4: false,
    paseador5: false,
    paseador6: false,
    paseador7: false,
    paseador8: false,
    paseador9: false,
    paseador0: false,
    paseado01: false,
    paseado02: false,
  });

  // Hace el "toggle" en cada opcion
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedItems((prev => ({ ...prev, [id]: checked })));
  }

  // Agrega los gustos dependiendo del estado de cada opcion
  const handleGustos = (text: string, status: boolean) => {
    status 
      ? (setGustos((prev => ([...prev, text]))), console.log(status))
      : (setGustos((prev => prev.filter(txt => txt !== text))), console.log(status))
  }

  const sendGustos = () => {
    console.log(gustos)
    setOpenModal(false)
  }

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center fixed top-0 left-0 bg-black/60">
        <div className="flex flex-col items-center gap-5 relative bg-[#EEE4F7] rounded-[25px] pb-4 pt-10">
          <button className="absolute right-5 top-3 font-extrabold text-2xl text-[#49454F]"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
          <h4 className="w-[434px] text-[#1E1E1E] text-xl text-center font-bold">
            Para conocerte mejor, seleccioná algunas categorias que te gustaría ver
          </h4>
          <section className="grid grid-cols-4 gap-4 gap-y-10 p-5 px-14">
            {[
              ['paseador1'],
              ['paseador2'],
              ['paseador3'],
              ['paseador4'],
              ['paseador5'],
              ['paseador6'],
              ['paseador7'],
              ['paseador8'],
              ['paseador9'],
              ['paseador0'],
              ['paseado01'],
              ['paseado02'],
            ].map(([option], i) => (
              <div key={i} className="">
                <label htmlFor={option}>
                  <input
                    type="checkbox"
                    id={option}
                    checked={checkedItems[option]}
                    onChange={handleCheck}
                    className="hidden"
                  />
                  <span
                    onClick={()=>handleGustos(option, !checkedItems[option])}
                    className={`w-[145px] h-[45px] grid place-items-center cursor-pointer rounded-full select-none transition
                    ${checkedItems[option] ? "bg-[#1E1E1E] text-white scale-105 option-shadow" : "bg-transparent outline outline-1 outline-[#1E1E1E] text-[#1E1E1E]"}
                  `}
                  >
                    {option}
                  </span>
                </label>
              </div>
            ))}
          </section>
          <div className="flex justify-end w-full px-14">
            <button
              onClick={sendGustos} 
              className="bg-[#1E1E1E] text-white w-[145px] h-[45px] grid place-items-center rounded-full">
              Continuar
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
