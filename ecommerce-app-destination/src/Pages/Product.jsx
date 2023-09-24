import React, { useEffect } from 'react'
import SideNavbar from '../Componants/Headers/SideNavbar'
import AllProduct from '../Componants/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Product = () => {
const dispatch= useDispatch()
const data= useSelector(state=>state)
const location = useLocation()
console.log({location});
console.log({data});

useEffect(()=>{

},[])

  return (
    <DIV>
      <div className='produc-main-box'>
        <SideNavbar />
       <AllProduct />
      </div>
    </DIV>
  )
}

export default Product

const DIV= styled.div`

.produc-main-box{
  display: flex;
width: 95%;
border: 2px solid red;
margin: 1rem auto;
gap:1rem;
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
  .produc-main-box{
   flex-direction: column;

}
}


`