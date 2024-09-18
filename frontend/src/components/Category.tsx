import React from 'react';
import CategoryItem from './CategoryItem';

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

const genres: genre[] = [
  {
    id: 1,
    title: 'Ficción',
    subgenre: [
      { title: 'Novela', href: 'novela' },
      { title: 'Cuento', href: 'cuento' },
      { title: 'Novela corta', href: 'novelaCorta' },
      { title: 'Ficción histórica', href: 'ficcionHistorica' },
      { title: 'Ficción científica', href: 'ficcionCientifica' },
      { title: 'Fantasía', href: 'fantasia' },
      { title: 'Misterio/Thriller', href: 'misterio' },
      { title: 'Romántica', href: 'romantica' },
    ],
  },

  {
    id: 2,
    title: 'No Ficción',
    subgenre: [
      { title: 'Biografía/autobiografía', href: 'biografia' },
      { title: 'Ensayo', href: 'ensayo' },
      { title: 'Historia', href: 'historia' },
      { title: 'Ciencia', href: 'ciencia' },
      { title: 'Autoayuda', href: 'autoayuda' },
      { title: 'Crecimiento personal', href: 'crecimientoPersonal' },
      { title: 'Viajes', href: 'viajes' },
      { title: 'Cocina', href: 'cocina' },
      { title: 'Religión y espiritualidad', href: 'religiónYEspiritualidad' },
      { title: 'Astrología', href: 'astrologia' },
      { title: 'Esoterismo', href: 'esoterismo' },
    ],
  },

  {
    id: 3,
    title: 'Géneros específicos',
    subgenre: [
      { title: 'Literatura', href: 'Literatura' },
      { title: 'Clásica', href: 'clasica' },
      { title: 'Contemporánea', href: 'contemporanea' },
      { title: 'Poesía', href: 'poesia' },
      { title: 'Infantil', href: 'infantil' },
      { title: 'Humor', href: 'humor' },
      { title: 'Juveniles', href: 'juveniles' },
      { title: 'Ilustrados', href: 'ilustrados' },
      { title: 'Diccionarios', href: 'diccionarios' },
      { title: 'Comics', href: 'comics' },
    ],
  },

  {
    id: 4,
    title: 'Especializados',
    subgenre: [
      { title: 'Idiomas', href: 'idiomas' },
      { title: 'Computación', href: 'computacion' },
      { title: 'Administración', href: 'administracion' },
      { title: 'Arte', href: 'arte' },
      { title: 'Fotografía', href: 'fotografia' },
      { title: 'Aviones/Aeronavegación', href: 'aviones' },
      { title: 'Diseño', href: 'diseño' },
    ],
  },
];

//////////////////////////////

export default function Category() {
  return (
    <div className="absolute left-[50%] top-[110%] z-30 w-[80%] translate-x-[-50%] rounded-lg bg-[#E7E0CF] px-6 py-6 text-[#232020]">

      <div className="flex justify-evenly gap-6">
        {genres.map((genre) => (
          <CategoryItem genre={genre} key={genre.id} />
        ))}
      </div>
    </div>
  );
}
