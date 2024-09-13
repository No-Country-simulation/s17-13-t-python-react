interface Props {
  data: Record<string, string | number>;
  children?: React.ReactNode;
}

export default function SimpleRow({ data, children }: Props) {
  return (
    <tr className="border-b border-auxiliary hover:bg-[#f5f2ec]">
      {children}
      {Object.keys(data).map((key) => (
        <td key={key} scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
          {data[key]}
        </td>
      ))}
    </tr>
  );
}
