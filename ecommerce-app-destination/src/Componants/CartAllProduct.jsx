import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
// import logo1 from "../../Images/TopImagePoster1.jpg"
// import logo2 from "../../Images/Refarmation.jpg"
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/CartProductReducer/Type";
export const CartList=()=>{
const dispatch= useDispatch();
const data= useSelector(state=>state.CartProduct)
console.log({cartProduct:data});
    const navigate = useNavigate()

    useEffect(()=>{
      dispatch(getAllProduct()).then(res=>{
        console.log({cartDatafromB:res.data});
      })
    },[])

    
    
      return <div>
          <div className='image-poster' style={{marginBottom:"30px"}}>
         
              <div  className='image-poster-box' >
             
                <img src={image1} alt="" />
            <div className="botton-text">
            <button>Shop Dresses</button>
           
            </div>
              </div>
              <div  className='image-poster-box'><img src={image2} alt="" />
   <div className="botton-text" >
            <button>Shop New Clothing</button>
          
            </div>
              </div>
  
              <div  className='image-poster-box'><img src={image3} alt="" />
   <div className="botton-text" >
            <button>Shop Jewelry</button>
            </div>
              </div>
              <div  className='image-poster-box'><img src={image4} alt="" />
               <div className="botton-text" >
            <button>Shop Reformation</button>
            </div>
              </div>
          </div>
      </div>
  }
  