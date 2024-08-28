import Link from 'next/link';
import React from 'react';

//////////////////////////////

interface SubGenero {
  title: string;
  href?: string;
}

interface Genero {
  id: number;
  title: string;
  subGenero: SubGenero[];
}

interface CategoryItemProps {
  genero: Genero;
}

//////////////////////////////

const CategoryItem: React.FC<CategoryItemProps> = ({ genero }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">{genero.title}</h3>

      <ul className="flex flex-col gap-1">
        {genero.subGenero.map((sub) => (
          <li key={sub.title}>
            <Link href={`/${sub.href}`}>{sub.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItem;
