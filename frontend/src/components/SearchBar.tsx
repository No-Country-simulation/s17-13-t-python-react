'use client';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { create } from 'zustand';

interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
}

interface SearchState {
  books: Book[];
  filteredBooks: Book[];
  message: string;
  setBooks: (books: Book[]) => void;
  setFilteredBooks: (books: Book[]) => void;
  setMessage: (message: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  books: [],
  filteredBooks: [],
  message: '',
  setBooks: (books) => set({ books }),
  setFilteredBooks: (books) => set({ filteredBooks: books }),
  setMessage: (message) => set({ message }),
}));

const SearchBar = () => {
  const { books, filteredBooks, message, setBooks, setFilteredBooks, setMessage } = useSearchStore();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    // Datos hardcodeados
    const hardcodedBooks: Book[] = [
      { id: 1, title: 'El Señor de los Anillos', genre: 'Fantasía', author: 'J.R.R. Tolkien' },
      { id: 2, title: 'Cien Años de Soledad', genre: 'Realismo Mágico', author: 'Gabriel García Márquez' },
      { id: 3, title: '1984', genre: 'Distopía', author: 'George Orwell' },
      { id: 4, title: 'Harry Potter y la Piedra Filosofal', genre: 'Fantasía', author: 'J.K. Rowling' },
      { id: 5, title: 'El Quijote', genre: 'Clásico', author: 'Miguel de Cervantes' },
    ];
    setBooks(hardcodedBooks);
  }, [setBooks]);

  const handleSearch = () => {
    const query = inputValue.toLowerCase();
    const results = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      setMessage('No se encontraron resultados');
    } else {
      setMessage('');
    }

    setFilteredBooks(results);
  };

  return (
    <>
      <div className="flex   items-center justify-end rounded-lg p-5">
        <div
          style={{ backgroundColor: '#264E61' }}
          className="flex w-96  h-9 items-center overflow-hidden rounded-full bg-blue-600"
        >
          <input
            type="text"
            placeholder="Título, autor o género"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ backgroundColor: '#264E61' }}
            className=" bg-blue-600     pl-14 pr-14 text-xl text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            style={{ backgroundColor: '#264E61' }}
            className="p-4 text-xl sm:p-3 md:p-4  text-white"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      {message && <p>{message}</p>}
      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
          
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
