
'use client';
import React,{useState,useEffect} from 'react';
import { FaSearch } from "react-icons/fa";
import { create } from 'zustand';

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
       
        <div  className=" p-10 flex items-center  rounded-lg">
            <div style={{ backgroundColor: '#264E61' }} className="flex items-center bg-blue-600 rounded-full overflow-hidden w-full">
                <input 
                    type="text" 
                    placeholder="Título, autor o género" 
                    style={{ backgroundColor: '#264E61' }}
                    className="p-4 text-lg w-full text-white placeholder-gray-300 bg-blue-600 focus:outline-none" 
                />
                <button 
                    onClick={handleSearch} 
                    style={{ backgroundColor: '#264E61' }}
                    className="p-4  text-white"
                >
                    <FaSearch />
                </button>
            </div>
        </div>
   
    
    
    </>
  )
}

export default SearchBar