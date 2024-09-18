import Link from 'next/link';

interface Props {
  name: string;
  url: string;
  bookId: number;
}

export default function Book({ name, url, bookId }: Props) {
  return (
    <figure className="book-figure">
      <Link className="book-link w-fit" href={`/book/${bookId}`}>
        <img className="book-image" title={name} src={url} alt={`cover book ${name}`} />
      </Link>
      <figcaption className="book-caption">{name}</figcaption>
    </figure>
  );
}
