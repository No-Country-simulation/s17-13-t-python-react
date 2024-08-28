
'use client'
import React,{useState,useEffect} from 'react'

import { create } from 'zustand'

interface Libro {
    firstName: string;
    lastName: string;
  }
interface message {message: string};
interface SearchId{id: number}

const SearchBar = () => {
  
    const [libros, setLibros] = useState<Libro[]>([]); 
    const [mensaje, setMensaje] = useState<string>(''); 
    const [searchId, setSearchId] = useState<number | null>(null); //

    const handleSearch = () => {
        // const filtered = libros.filter(lib => lib.Id.includes(searchId));
        // setFiltered(filtered);
        // setSearchId('');
    //     if (filtered.length === 0) {
    //       setMensaje("La consulta no arrojó datos");
    //     } else {
    //       setMensaje("");
    //     }
      }; 
  

    
    return (
    <>
    <div className="m-60">
        <h1 className="text-red-50 ">asdsdda</h1>
        <div className="p-10">

            <input type="text" placeholder="Título, autor o género" className="border p-8 w-full mt-2" />
            <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
              Buscar
            </button>
        </div>
      
          </div>
    
    
    </>
  )
}

export default SearchBar