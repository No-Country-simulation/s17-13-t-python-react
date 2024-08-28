import { propOptionModal } from '@/interfaces/modal'


export default function OptionModal({ option, checkedItems, handleCheck, preferenceModalHandler }: propOptionModal) {
  return (
    <div className='sm:flex sm:justify-center'>
      <label htmlFor={option}>
        <input
          type="checkbox"
          id={option}
          checked={!!checkedItems[option]} // "!!" Inicializar en booleano cualquier valor (undefined o null) inicial
          onChange={handleCheck}
          className="hidden"
        />
        <span
          onClick={() => preferenceModalHandler(option, !checkedItems[option])}
          className={`w-full sm:w-[145px] h-[45px] grid place-items-center cursor-pointer rounded-full select-none transition
        ${checkedItems[option] ? "bg-[#1E1E1E] text-white scale-105 option-shadow" : "bg-transparent outline outline-1 outline-[#1E1E1E] text-[#1E1E1E]"}
      `}
        >
          {option}
        </span>
      </label>
    </div>
  )
}
