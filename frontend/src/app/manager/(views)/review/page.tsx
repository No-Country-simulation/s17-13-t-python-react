import Title from '@/components/Typography/Title'
import React from 'react'
import ReviewForm from '../../_components/ReviewForm'
import { UserAndBooks } from '../../_utils/getUserAndBooks'


export default async function Review() {
  const data = await  UserAndBooks

  if(typeof data[0] === 'string'){
    return <p>{data[0]}</p>
  }
  if(typeof data[1] === 'string'){
    return <p>{data[1]}</p>
  }

  const users = data[0].map((user) => ({
    id: user.id,
    name: user.name,
  }))

  const books = data[1].map((book) => ({
    id: book.id,
    title: book.title,
  }))
  

  return (
    <>
      <Title customClass="text-stroke" level={2} title="Creador de reviews" />
      <ReviewForm books={books} users={users} />
    </>
  )
}
