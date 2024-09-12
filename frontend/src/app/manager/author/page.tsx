import Title from '@/components/Typography/Title';
import AuthorForm from '../_components/AuthorForm';

export default function AuthorManagerPage() {
  return (
    <>
      <Title level={2} title="Creador de autores" />
      <AuthorForm />
    </>
  );
}
