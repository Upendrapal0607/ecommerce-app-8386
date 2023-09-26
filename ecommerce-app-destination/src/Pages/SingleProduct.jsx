import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams()
  console.log({id});
  return (
    <div>
      <h1>Hello I am single page</h1>
    </div>
  )
}

export default SingleProduct
