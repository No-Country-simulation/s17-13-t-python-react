import Link from 'next/link';
import React from 'react';

//////////////////////////////

interface subgenre {
  title: string;
  href?: string;
}

interface genre {
  id: number;
  title: string;
  subgenre: subgenre[];
}

interface CategoryItemProps {
  genre: genre;
}

//////////////////////////////

const CategoryItem: React.FC<CategoryItemProps> = ({ genre }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">{genre.title}</h3>

      <ul className="flex flex-col gap-1">
        {genre.subgenre.map((sub) => (
          <li key={sub.title}>
            <Link href={`/${sub.href}`}>{sub.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItem;
