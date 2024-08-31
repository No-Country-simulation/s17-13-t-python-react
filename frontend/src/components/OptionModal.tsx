import { propOptionModal } from '@/interfaces/modal';

export default function OptionModal({
  option,
  checkedItems,
  handleCheck,
  preferenceModalHandler,
}: propOptionModal) {
  return (
    <div className="sm:flex sm:justify-center">
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
          className={`grid h-[45px] w-full cursor-pointer select-none place-items-center rounded-full transition sm:w-[145px] ${checkedItems[option] ? 'option-shadow scale-105 bg-[#1E1E1E] text-white' : 'bg-transparent text-[#1E1E1E] outline outline-1 outline-[#1E1E1E]'} `}
        >
          {option}
        </span>
      </label>
    </div>
  );
}
