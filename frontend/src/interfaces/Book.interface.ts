export interface Book {
  cover: string;
  title: string;
  rating: number;
  author: string;
  editorial: string;
  pageNumber: number;
  description: string;
  images: string[];
}

export interface ViewerBook extends Pick<Book, 'images' | 'title'> {
  handlerViewer: () => void;
}

export interface BookOverviewProps extends Book {
  handlerViewer: () => void;
}
