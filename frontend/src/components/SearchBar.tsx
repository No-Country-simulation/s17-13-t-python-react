'use client';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { create } from 'zustand';

interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
}
interface message {
  message: string;
}
interface SearchId {
  id: number;
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
  const { books, filteredBooks, message, setFilteredBooks, setMessage } = useSearchStore();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    const query = inputValue.toLowerCase();
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query),
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
      <div className="flex items-center rounded-lg p-10">
        <div
          style={{ backgroundColor: '#264E61' }}
          className="flex w-full items-center overflow-hidden rounded-full bg-blue-600"
        >
          <input
            type="text"
            placeholder="Título, autor o género"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ backgroundColor: '#264E61' }}
            className="w-full bg-blue-600 p-4 text-lg text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            style={{ backgroundColor: '#264E61' }}
            className="p-4 text-white"
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
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
