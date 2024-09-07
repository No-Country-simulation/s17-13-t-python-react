import { SummaryItem } from '@/interfaces/SummaryItem.interface';

interface Props {
  dataList: SummaryItem[];
  customClass?: string;
}

export default function ProfileSummaryList({ dataList, customClass }: Props) {
  return (
    <ul className={`flex flex-col gap-4 ${customClass || ''}`}>
      {dataList.map(({ icon, text }) => (
        <li className="flex items-center gap-2" key={text}>
          {icon}
          <span className="text-sm font-medium">{text}</span>
        </li>
      ))}
    </ul>
  );
}
