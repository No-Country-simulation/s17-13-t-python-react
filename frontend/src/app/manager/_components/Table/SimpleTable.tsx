import THead from './THead';

interface Props {
  headers: string[];
  children: React.ReactNode;
}

export default function SimpleTable({ headers, children }: Props) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm rtl:text-right">
        <THead headers={headers} />
        <tbody className="bg-light text-main">{children}</tbody>
      </table>
    </div>
  );
}
