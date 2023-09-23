import React from 'react'
import Homepage from './Homepage'
import Login from '../Componants/Login'
import AdminLogin from '../Componants/AdminLogin'
import AdminRegister from '../Componants/AdminRegister'
import PageNotFound from './PageNotFound'
import {Routes,Route} from "react-router-dom"
import Product from './Product'
// import SignIn from '../Componants/SignIn'
import RegistrationForm from '../Componants/SignIn'
import SelectLogin from '../Componants/SelectLogin'
import AdminProductPage from './AdminProductPage'
import Cart from './Cart'
import SingleProduct from './SingleProduct'

const MainRoute = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/signIn" element={<RegistrationForm/>} />
        <Route path="/adminregister" element={<AdminRegister/>} />
        <Route path="/login-path" element={<SelectLogin/>} />
        <Route path="*" element={< PageNotFound/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/productmodify" element={<AdminProductPage/>} />
        <Route path="/product" element={< Product/>} />
     </Routes>
    </div>
  )
}

export default MainRoute
