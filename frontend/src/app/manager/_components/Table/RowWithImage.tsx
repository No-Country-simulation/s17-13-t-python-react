import { GetAuthorResponse } from '../../_validators/authorSchema';

interface Props {
  author: GetAuthorResponse;
}

export default function RowWithImage({ author }: Props) {
  return (
    <tr className="border-b border-auxiliary hover:bg-[#f5f2ec]">
      <td className="px-6 py-4">{author.id}</td>
      <td scope="row" className="flex items-center whitespace-nowrap px-6 py-4">
        <img className="h-10 w-10 rounded-full shadow-md" src={author.img} alt={author.name} />
      </td>

      <td className="px-6 py-4">{author.name}</td>
      <td title={author.biography} className="max-w-40 truncate px-6 py-4">
        {author.biography}
      </td>
    </tr>
  );
}
