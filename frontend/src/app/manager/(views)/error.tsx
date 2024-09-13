'use client';

import Title from '@/components/Typography/Title';
import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SubViewError({ error }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return <Title level={2} title={error.message} />;
}
