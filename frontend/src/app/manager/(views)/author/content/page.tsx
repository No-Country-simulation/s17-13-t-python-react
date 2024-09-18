import Anchor from '@/app/manager/_components/Anchor';
import SimpleTable from '@/app/manager/_components/Table/SimpleTable';
import RowWithImage from '@/app/manager/_components/Table/RowWithImage';
import { GetAuthorResponse, KeyAuthorTye } from '@/app/manager/_validators/authorSchema';
import fetcher from '@/utils/fetcher';
import Title from '@/components/Typography/Title';

export default async function AuthorContent() {
  const data = await fetcher<GetAuthorResponse[]>('/author/');
  const tableHeads: KeyAuthorTye[] = ['id', 'img', 'name', 'biography'];

  if (typeof data === 'string') {
    return <Title level={2} title={data} />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <Title customClass="text-stroke" level={2} title="Autores" />
        <Anchor
          href="/manager/author"
          text="volver"
          customClass="my-4 ml-auto text-secondary"
          orientation="back"
        />
      </div>

      <SimpleTable headers={tableHeads}>
        {data.reverse().map((author) => (
          <RowWithImage author={author} key={author.id} />
        ))}
      </SimpleTable>
    </>
  );
}
