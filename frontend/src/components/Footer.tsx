'use client' 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-main min-h-[25rem] py-20 px-14 text-[#FDF8FF]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <section>
          <h3 className="font-semibold mb-1 text-[16px] md:text-[20px]">BibliOz</h3>
          <ul>
            <li><a href="" className="text-[16px] md:text-[20px]">Preguntas frecuentes</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Términos y condiciones</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Contacto</a></li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold mb-1 text-[16px] md:text-[20px]">Categorias</h3>
          <ul>
            <li><a href="" className="text-[16px] md:text-[20px]">Ficción</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">No ficción</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Géneros específicos</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Especializados</a></li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold mb-1 text-[16px] md:text-[20px]">Todos los libros</h3>
          <ul>
            <li><a href="" className="text-[16px] md:text-[20px]">Tus recomendados</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Top ten</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Más nuevos</a></li>
            <li><a href="" className="text-[16px] md:text-[20px]">Mis favoritos</a></li>
          </ul>
        </section>
        <section>
          <h3 className="font-bold mb-4 text-[16px] md:text-[20px]">Seguinos en nuestras redes</h3>
          {/* arreglar responsive de icons */}
          <ul className="flex space-x-8 "> 
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram  className="w-[2.734375rem] h-[2.7925rem]" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="w-[2.734375rem] h-[2.7925rem]" />
                </a>
              </li>
              <li>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaSquareXTwitter className="w-[2.734375rem] h-[2.7925rem]" />
                </a>
              </li>
            </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer