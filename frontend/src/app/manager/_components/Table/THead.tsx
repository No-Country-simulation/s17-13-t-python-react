interface Props {
  headers: string[];
}

export default function THead({ headers }: Props) {
  return (
    <thead className="bg-main text-xs uppercase text-light">
      <tr>
        {headers.map((th) => (
          <th key={th} scope="col" className="px-6 py-3">
            {th.replace('_', ' ')}
          </th>
        ))}
      </tr>
    </thead>
  );
}
