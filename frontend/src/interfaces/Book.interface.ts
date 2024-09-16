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

export type BookType = Pick<
  Book,
  'title' | 'author' | 'cover' | 'description' | 'editorial' | 'rating' | 'pageNumber'
>;

export interface BookOverviewProps extends Book {
  handlerViewer: () => void;
}
