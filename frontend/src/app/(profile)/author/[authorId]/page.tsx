'use client';
import authorImage from '/public/avatars/avatar-1.png';
import Carousel from '@/components/Carousel/Carousel';
import AuthorProfileOverview from '../../_components/AuthorProfileOverview';
import { useState, useEffect } from 'react';
import AuthorSkeleton from '@/components/Skeleton/AuthorSkeleton';
import builderApiUrl from '@/utils/builderApiUrl';

interface AuthorResponse {
  name: string | null;
  biography: string | null;
  img: string | null;
}

interface PageProps {
  params: {
    authorId: number;
  };
}

export default function Author({ params }: PageProps) {
  const [authorData, SetAuthorData] = useState<AuthorResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const url = builderApiUrl(`author/${params.authorId}`);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: AuthorResponse = await response.json();
        console.log(data);
        SetAuthorData(data);
      } else {
        console.error('Error en la respuesta', response.status);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) {
    return <AuthorSkeleton />;
  }

  return (
    <>
      <AuthorProfileOverview
        bio={authorData?.biography || 'Biografía no disponible'}
        image={authorData?.img || 'imagen no encontrada'}
        name={authorData?.name || 'Autor Desconocido'}
      />
    </>
  );
}
