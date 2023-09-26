import React, { useEffect } from 'react'
// import { ImagePoster } from '../Componants/MultipleLandingPages/ImagePoster'
import { CartList } from '../Componants/CartAllProduct'
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../Redux/CartProductReducer/Type';

const Cart = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getAllProduct())
  },[])
  return (
    <div>
     <CartList />
    </div>
  )
}

export default Cart
