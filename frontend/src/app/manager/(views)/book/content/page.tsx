import Anchor from '@/app/manager/_components/Anchor';
import SimpleTable from '@/app/manager/_components/Table/SimpleTable';
import { GetBookResponse, KeyBookTye } from '@/app/manager/_validators/bookSchema';
import Title from '@/components/Typography/Title';
import fetcher from '@/utils/fetcher';
import RowBook from '@/app/manager/_components/Table/RowBook';

export default async function BookContent() {
  const data = await fetcher<GetBookResponse[]>('/book/');
  const tableHeads: KeyBookTye[] = ['id', 'img', 'title', 'description', 'genre_id', 'author_id'];

  if (typeof data === 'string') {
    return <Title level={2} title={data} />;
  }

  return (
    <>
      <Anchor href="/manager/genre" text="volver" customClass="my-4 ml-auto" orientation="back" />
      <SimpleTable headers={tableHeads}>
        {data.reverse().map((book) => (
          <RowBook book={book} key={book.id} />
        ))}
      </SimpleTable>
    </>
  );
}
