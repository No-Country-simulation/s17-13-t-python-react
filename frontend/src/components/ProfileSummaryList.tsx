import { SummaryItem } from "@/interfaces/SummaryItem.interface";

interface Props {
  dataList: SummaryItem[];
}

export default function ProfileSummaryList({ dataList }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {dataList.map(({ icon, text }) => (
        <li className="flex items-center gap-2" key={text}>
          {icon}
          <span className="text-sm font-medium">{text}</span>
        </li>
      ))}
    </ul>
  );
}
