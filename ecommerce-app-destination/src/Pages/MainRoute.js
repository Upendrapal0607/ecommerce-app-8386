import React from 'react'
import Homepage from './Homepage'
import Login from '../Componants/Login'
import PageNotFound from './PageNotFound'
import {Routes,Route} from "react-router-dom"
import Product from './Product'

const MainRoute = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={< PageNotFound/>} />
        <Route path="/product" element={< Product/>} />
     </Routes>
    </div>
  )
}

export default MainRoute
