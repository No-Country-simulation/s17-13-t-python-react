import Title from '@/components/Typography/Title';
import Credentials from './_components/Credentials';

export default function ManagerPage() {
  return (
    <>
      <Title level={2} title="BibliOz Manager" customClass="py-4 mx-auto w-fit" />
      <Credentials />
    </>
  );
}
