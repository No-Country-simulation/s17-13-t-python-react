import React from 'react';
import SimpleRow from './SimpleRow';
import { BookValues } from '../../_validators/bookSchema';

interface Props {
  book: BookValues;
}

export default function RowBook({ book }: Props) {
  const { img, ...rest } = book;
  return (
    <SimpleRow data={rest}>
      <td scope="row" className="flex items-center whitespace-nowrap px-6 py-4">
        <img className="h-10 w-10 rounded-full shadow-md" src={img} alt={rest.title} />
      </td>
    </SimpleRow>
  );
}
