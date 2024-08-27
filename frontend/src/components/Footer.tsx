'use client' 

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] min-h-[400px] py-10 px-14 text-gray-800">
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
          <div>

          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer