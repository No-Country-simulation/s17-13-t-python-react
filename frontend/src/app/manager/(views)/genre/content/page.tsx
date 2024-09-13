import Anchor from '@/app/manager/_components/Anchor';
import SimpleTable from '@/app/manager/_components/Table/SimpleTable';
import SimpleRow from '@/app/manager/_components/Table/SimpleRow';
import fetcher from '@/utils/fetcher';
import { KeyGenreTye, GetGenreResponse } from '@/app/manager/_validators/genreSchema';
import Title from '@/components/Typography/Title';

export default async function GenreContent() {
  const data = await fetcher<GetGenreResponse[]>('/genre/');
  const tableHeads: KeyGenreTye[] = ['id', 'name'];

  if (typeof data === 'string') {
    return <Title level={2} title={data} />;
  }

  return (
    <>
      <Anchor href="/manager/genre" text="volver" customClass="my-4 ml-auto" orientation="back" />
      <SimpleTable headers={tableHeads}>
        {data.reverse().map((row) => (
          <SimpleRow data={{ id: row.id, name: row.name }} key={row.id} />
        ))}
      </SimpleTable>
    </>
  );
}
