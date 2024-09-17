import { GetGenreResponse } from '@/app/manager/_validators/genreSchema';
import fetcher from '@/utils/fetcher';
import Modal from '../_components/Modal';
import PreferencesForm from '../_components/PreferencesForm';
import ErrorMessage from '@/components/ErrorMessage';

interface ModalPageProps {
  params: {
    id: number;
  };
}

export default async function ModalPage({ params: { id } }: ModalPageProps) {
  const genders = await fetcher<GetGenreResponse[]>('/genre/');

  return (
    <Modal>
      {typeof genders === 'string' ? (
        <ErrorMessage customClass="content-center" error={genders} />
      ) : (
        <PreferencesForm genders={[]} />
      )}
    </Modal>
  );
}
