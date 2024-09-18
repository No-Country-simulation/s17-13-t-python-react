'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { create } from 'zustand';
import builderApiUrl from '@/utils/builderApiUrl';
import Link from 'next/link';
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
  const { filteredBooks, message, setFilteredBooks, setMessage } = useSearchStore();
  const [inputValue, setInputValue] = useState<string>('');
  
  const url = builderApiUrl(`search/`);

  const searchBooks = async (searchTerm: string) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: searchTerm
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setFilteredBooks(data); 
      setMessage('');
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setMessage('Error al buscar libros');
    }
  };

  const handleSearch = () => {
    if (inputValue.trim() === '') {
      setMessage('Por favor, introduce un término de búsqueda');
      return;
    }
    searchBooks(inputValue);
  };
  return (
    <>
      <div className=" flex items-end flex-col justify-end rounded-lg pt-5">
        <div
          className="relative flex h-9 w-96 items-center overflow-hidden rounded-full bg-blue-600"
          style={{ backgroundColor: '#264E61' }}
        >
          <input
            type="text"
            placeholder="Título, autor o género"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-blue-600 pl-14 pr-14 text-xl text-white placeholder-gray-300 focus:outline-none"
            style={{ backgroundColor: '#264E61' }}
          />
          <button
            onClick={handleSearch}
            className="p-4 text-xl text-white sm:p-3 md:p-4"
            style={{ backgroundColor: '#264E61' }}
          >
            <FaSearch />
          </button>
        </div>

        {/* Contenedor de resultados */}
        {filteredBooks.length > 0 && (
          <div className=" w-96 bg-slate-200 z-10">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="p-4 hover:bg-gray-100 cursor-pointer"
              > 
             <Link key={book.id} href={`/book/${book.id}`}>
    {book.title}

  </Link>
              </div>  
            ))}
          </div>
        )}
      </div>

      {message && <p>{message}</p>}
    </>
  );
};

export default SearchBar;
