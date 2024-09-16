import Title from '@/components/Typography/Title';
import GenderForm from '../../_components/GenderForm';

export default function GenrePage() {
  return (
    <>
      <Title customClass="text-stroke" level={2} title="Creador de géneros" />
      <GenderForm />
    </>
  );
}
