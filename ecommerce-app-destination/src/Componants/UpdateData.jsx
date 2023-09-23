import React, { useEffect, useState } from 'react';
// import './RegistrationForm.css';
import styled from "styled-components"
import {useNavigate,Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
function UpdateData({id,handleUpdata}) {
    const navigate= useNavigate()
    const Data= useSelector(state=>state.ProductReducer.Product.data)
    let EditebleData= Data?.filter(el=>el._id==id)
  const [formData, setFormData] = useState(EditebleData&&EditebleData[0]||{});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: (name=="price"||name=="rating")?+value:value,
    });
  };

  return (
    <DIV>
    <div className="registration-container">
   
      <form className="registration-form" onSubmit={(e)=>handleUpdata(e,formData)}>
         {/* <div className='extra-suggesion'>
          <h1>Empower your e-commerce journey as an admin. Register today and take charge of your online store.</h1>
        </div> */}
        <input
          type="text"
          name="name"
          placeholder="Title"
          value={formData.name}
          onChange={handleChange}
          required
        />
      
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <select name="gender" onChange={handleChange} value={formData.gender} id="" placeholder='Select Gender'>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
        <textarea
          type="text"
          name="details"
          placeholder="Description"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <button type="submit">UPDATE</button>
        {/* <div className='already-account'>
        <h1>Already Account 👉<Link className="link" to="/adminlogin">Login here</Link></h1>
      </div> */}
      </form>
      
    </div>
    </DIV>
  );
}

export default UpdateData;


const DIV=styled.div`
border: 4px solid red;
/* height: 60vh; */
padding:2rem 0rem;
/* overscroll-behavior-y: -2; */
width: 30%;
margin:2rem auto;
color: #000000d6;
/* background-image: url("https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg"); */

.extra-suggesion{
font-size:18px;
font-weight: 500;
color:#6b5697;
padding: 1rem 0rem;
/* width: 100%; */
border:2px solid green;
/* text-align: center; */

}
.registration-container {
  border:2px solid green;
  display: flex;
  flex-direction: column;
  width:100%;
  margin:auto;
  border: 0px solid red;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.registration-form {
  width: 100%;
display: flex;
flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc; //#ccc
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(249, 249, 249);
}

input ,textarea,select{
    /* line:1px solid #007bff; */

  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border:.1rem solid rgba(0, 0, 0, 0.24);
}

button {
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
.already-account{
    text-align:center;
    padding:1rem;
    border:0px solid red;
    color: #0000006a;
    font-size:14px;
    
}
.link:hover{
    color:#007bff; 
    font-weight:500;
}

@media only screen and (min-width: 668px) and (max-width: 920px) {
    .registration-form{
        width: 100%;
    }
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
  width: 100%;
    .registration-container{
        width: 100%;
    }
    .registration-form{
        width: 100%;
        /* flex-direction: row; */
    }
    .extra-suggesion{
        width: 100%;
    }
}

`
