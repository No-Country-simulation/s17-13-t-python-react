import Title from '@/components/Typography/Title';
import AuthorForm from '../../_components/AuthorForm';

export default function AuthorManagerPage() {
  return (
    <>
      <Title customClass="text-stroke" level={2} title="Creador de autores" />
      <AuthorForm />
    </>
  );
}
