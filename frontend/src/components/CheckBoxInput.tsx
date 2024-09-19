import { ChangeEvent } from 'react';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';

interface Props {
  gender: string;
  index: number;
  control: Control<any>;
  customClass?: string;
}

interface CheckBoxChange {
  e: ChangeEvent<HTMLInputElement>;
  field: ControllerRenderProps;
}

export default function CheckBoxInput({ gender, index, control, customClass }: Props) {
  const inputCheckedStyles =
    'has-[:checked]:text-white has-[:checked]:bg-auxiliary has-[:checked]:shadow-btn has-[:checked]:border-auxiliary has-[:checked]:border-auxiliary has-[:checked]:animate-tada';
  const inputHoverStyles =
    'hover:bg-auxiliary hover:text-white hover:shadow-btn hover:border-auxiliary';

  function onCheckboxChange({ e, field }: CheckBoxChange) {
    const updatedValue = e.target.checked
      ? [...field.value, gender]
      : field.value.filter((g: string) => g !== gender);
    field.onChange(updatedValue);
  }

  return (
    <Controller
      name="genders"
      control={control}
      render={({ field }) => (
        <label
          className={`${customClass} ${inputCheckedStyles} ${inputHoverStyles}`}
          htmlFor={`${gender}-${index}`}
        >
          <span className="truncate capitalize">{gender}</span>
          <input
            className="hidden"
            type="checkbox"
            id={`${gender}-${index}`}
            {...field}
            onChange={(e) => onCheckboxChange({ e, field })}
            checked={field.value.includes(gender)}
          />
        </label>
      )}
    />
  );
}
