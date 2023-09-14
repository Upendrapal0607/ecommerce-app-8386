import { useNavigate } from "react-router-dom"
import React from "react"
// import logo1 from "../../Images/TopImagePoster1.jpg"
// import logo2 from "../../Images/Refarmation.jpg"
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/image4.jpg';
import "./Landing.css";
export function ImagePoster(){
  
    const navigate = useNavigate()
    
      return <div>
          <div className='image-poster' style={{marginBottom:"30px"}}>
         
              <div onClick={()=>navigate("/Dresses")} className='image-poster-box' >
             
                <img src={image1} alt="" />
            <div style={{marginTop:"-50px"}}>
            <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Dresses</button>
         
            </div>
              </div>
              <div onClick={()=>navigate("/Product")} className='image-poster-box'><img src={image2} alt="" />
   <div style={{marginTop:"-50px"}}>
            <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop New Clothing</button>
            </div>
              </div>
  
              <div onClick={()=>navigate("/Jewelry")} className='image-poster-box'><img src={image3} alt="" />
   <div style={{marginTop:"-50px"}}>
            <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Jewelry</button>
            </div>
              </div>
              <div onClick={()=>navigate("/Product")} className='image-poster-box'><img src={image4} alt="" />
               <div style={{marginTop:"-50px"}}>
            <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Refrmation</button>
            </div>
              </div>
          </div>
      </div>
  }
  