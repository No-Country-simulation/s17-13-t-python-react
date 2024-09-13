import { ReactNode } from 'react';

export interface Book {
  cover: any;
  rating: number | undefined;
  editorial: ReactNode;
  pageNumber: ReactNode;
  description: ReactNode;
  id: number;
  title: string;
  genre: string;
  author: string;
}
