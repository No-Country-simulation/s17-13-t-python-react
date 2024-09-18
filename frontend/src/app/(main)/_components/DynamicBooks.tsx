'use client'

import { GetBookResponse } from "@/app/manager/_validators/bookSchema"
import { useUserStore } from "@/app/store/userStore"
import DynamicGallery from "@/components/DynamicGallery"
import fetcher from "@/utils/fetcher"
import { useEffect, useState } from "react"

export default function DynamicBooks() {
  const {isLogged} = useUserStore((state) => ({
    isLogged : state.isLogged
  }))

  const [books, setBooks] = useState<GetBookResponse[]>([])

  async function GetBooks() {
    const path = isLogged ? '/servicesBook/recommend' : '/servicesBook/randomBooks'
    return await fetcher<GetBookResponse[]>(path)
  }

  useEffect(() => {
    GetBooks().then((data) => {
      if (typeof data === 'string') {
        return setBooks([])
      }
      setBooks(data)
    })
  }, [])


  return (
      <DynamicGallery books={books} carouselTitle={isLogged ? "Tus recomendados" : "Algunas de nuestras variedades"} />
  )
}
