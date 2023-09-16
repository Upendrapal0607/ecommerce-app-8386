import React, { useState } from 'react';
// import './AdminLogin.css';
import styled from "styled-components"
import { useNavigate,Link } from 'react-router-dom';
function AdminLogin() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
    console.log(formData);
  };


  return (
    <DIV>
    <div className="registration-container">
   
      <form className="registration-form" onSubmit={handleSubmit}>
         <div className='extra-suggesion'>
          <h1>Your gateway to exclusive offers and personalized shopping awaits. Login now!</h1>
        </div>
        {/* <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /> */}
      
        {/* <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
         */}
        {/* <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        /> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        /> */}
        <button type="submit">LOGIN</button>
        <div className='already-account'>
        <h1>Create Account 👉<Link className="link" to="/adminregister">signup here</Link></h1>
      </div>
      </form>
    </div>
    </DIV>
  );
}

export default AdminLogin;


const DIV=styled.div`
border: 0px solid red;
/* height: 60vh; */
width: 90%;
margin:2rem auto;
padding: 2rem;
color: #000000d6;
background-image: url("https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg");

.extra-suggesion{
font-size:18px;
font-weight: 500;
color:#4c00ff;
padding: 1rem 0rem;
width: 70%;

}
.registration-container {
  display: flex;
  flex-direction: column;
  width:70%;
  margin:auto;
  border: 0px solid red;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.registration-form {
  width: 70%;
display: flex;
flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc; //#ccc
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(249, 249, 249);
}

input {
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
    .registration-container{
        width: 100%;
    }
    .registration-form{
        width: 100%;
    }
    .extra-suggesion{
        width: 100%;
    }
}

`
