import product from '../db.json'
import "./Products.css";
import { AuthContext } from '../Context/Authcontext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { Buyproduct } from './Buyproduct';

// const {data,setdata}=useContext(AuthContext)
export function Cartpage(){
    const navigate=useNavigate()
    const {data2,setData2,setSingleProduct,singleProduct}=useContext(AuthContext)
    const delettoCartHandle=(Item)=>{
        let newData=data2.filter((item)=>{
            if(item.id!=Item.id){
                return item
            }
        })
        setData2(newData)
   
      }
   
    return data2.length==0?<h1>Your Cart is Empty Plese add some product</h1>:<div className="all-product">
    <div className="product-list">
      {data2?.map((item)=>
      {
      return   <div key={item.id} >
       <div className='product-card'>
       <div>
           <img src={item.image} alt={item.name} />
       </div>
       <div>
        <h1 style={{color:"black"}}>{item.name}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <p style={{color:"#455A64",fontSize:'15px', fontWeight:"500"}}>Price :</p>
         <p>{item.price}</p>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <p style={{color:"#455A64",fontSize:'15px', fontWeight:"500"}}>Rating :</p>
        <p>{item.rating==5?"★★★★★":item.rating==4?"★★★★":"★★★"}</p>
        
        </div>
        {/* <p>{item.details}</p> */}
        <div style={{display:"grid", gridTemplateColumns:'repeat(2,1fr)',gap:"30px",width:"100%"}}>
        <button onClick={()=>{navigate('/Buypage')}}
          className='add-cart-btn'>Buy</button>
        <button className='add-cart-btn' onClick={()=>{delettoCartHandle(item)}}>Remove</button>
        </div>
        
       </div>
       </div>
        </div>
      }
      )}
        </div> 
       
    </div>
}