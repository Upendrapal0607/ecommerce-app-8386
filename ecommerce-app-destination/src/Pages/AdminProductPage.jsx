import React, { useState } from 'react'
import AdminForm from '../Componants/AdminForm'
import AdminProductList from '../Componants/AdminProductList'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import styled from 'styled-components'
import { AddProduct, DeletelProduct, getAllProduct, updateProduct } from '../Redux/ProductReducer/Action'
import UpdateData from '../Componants/UpdateData'
import Loader from '../Componants/Loader'
import ErrorLoad from '../Componants/ErrorLoad'

const AdminProductPage = () => {
  const dispatch=useDispatch()
  const [isUpdate,setIsUpdate]=useState(false)
  const data= useSelector(state=>state.ProductReducer)
  // console.log(data);
  const [DataId,setDataId]=useState(0)

const [page,setPage]=React.useState(1)


const [limit,setLimit]=React.useState(8)

React.useEffect(()=>{
dispatch(getAllProduct({limit,page}))
  },[page,limit])

 const handleAdd=(e,data,setFormData)=>{
e.preventDefault();
dispatch(AddProduct(data))
.then(res=>{
  // console.log(res)
  dispatch(getAllProduct({limit,page}))
  setFormData({
    category: "",
    name: "",
    image: "",
    rating: "",
    price: "",
    details:"",
    gender: ""
  })
  alert(res.message)
  // setIsUpdate(false)
})
 }

  const handleUpdata=(e,data)=>{
    e.preventDefault();
// console.log(data)
const PostData={
  category:data.category,
  name:data.name,
  price:data.price,
  rating:data.rating,
  gender:data.gender,
  image:data.image,
  details:data.details

}
dispatch(updateProduct(DataId,PostData))
.then(res=>{
  console.log(res)
  dispatch(getAllProduct({limit,page}))
  alert(res.message)
  setIsUpdate(false)
})

  }
  
  const handleEdit=(id)=>{
  setIsUpdate(true)
  setDataId(id)
  }

  const HandleDelete=(id)=>{
    dispatch(DeletelProduct(id)).then(res=>{
      dispatch(getAllProduct({limit,page}))
      alert(res.message)
    })
   
  }
  


  return (
    <DIV>
  
      {data?.isError?< ErrorLoad/>:
      <div>
         <div className="add-buttom">
          <button onClick={()=>setIsUpdate(false)}>ADD</button>
         </div>
      
      <div className='main-box'>
     {isUpdate?<UpdateData id={DataId} setIsUpdate={setIsUpdate} handleUpdata={handleUpdata} />:<AdminForm handleAdd={handleAdd}/>}
      <div className='product-page'>
      {data?.isLoading? <Loader />:<AdminProductList data={data.Product.data} handleEdit={handleEdit} HandleDelete={HandleDelete}/>}
      <div className='btn-box'>
       <button disabled={page==1}  onClick={()=>setPage(page-1)} className="page-btn">{"<"}</button>
       <button className="page-btn">{page}</button>
       <button disabled={page==data.Product.totalPages} onClick={()=>setPage(page+1)} className="page-btn">{">"}</button>
      </div>
      </div>
    </div>
    </div>}
    </DIV>
  )
}

export default AdminProductPage
const DIV= styled.div`
  /* display:flex;
  justify-content: space-between;
  border: 0px solid blue;
  gap: 1rem; */
  .add-buttom{
    display:flex;
    justify-content: end;
    /* text-align: left; */
    width:98%;
    border: 0px solid red;
    margin:auto;
  }
  .add-buttom>button{
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #0056b3;
}
  .main-box{
width:100%;
display:flex;
  justify-content: space-between;
  border: 0px solid blue;
  gap: 1rem;
  }
  .product-page{
    border: 0px solid blue;
    width: 65%;
    /* padding:1rem 0rem; */
/* overscroll-behavior-y: -2; */
/* width: 30%; */
margin:2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .btn-box{
    border:0px solid blue;
    display:flex;
    gap:1rem;
    
  }
  .page-btn{
    border:0px solid blue;
    font-size: 25px;
    font-weight: 600;
    width:6rem;
    text-align: center;
    border-radius: 5px;
    background-color: #00000092;
color:#fff;
    /* background-color: #007bff; */
  }
  .page-btn:hover{
    background-color: #000000e4;
    color: #fff;
    /* background-color: #0056b3; */
  }
  .page-btn:nth-child(2){
    width:4rem;
    font-size: 20px;
    font-weight: 500;
    text-align: center;

  }
  @media only screen and (min-width: 280px) and (max-width: 667px) {
    /* flex-direction: column; */
     .main-box{
       flex-direction: column;
     }
    .product-page{
      width: 100%;
      padding:0rem 0rem;
    }
    .page-btn{
    border:0px solid blue;
    /* padding:.3rem 1rem; */
    width:5rem;
  }
  .page-btn:nth-child(2){
    width:2rem;

  }
  /* .btn-box{
    flex-wrap: wrap;
  } */

  }
`