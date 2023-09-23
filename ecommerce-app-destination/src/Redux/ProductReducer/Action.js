import axios from "axios"
import { DELETE_REQUEST_SUCCESS, GET_REQUEST_SUCCESS, POST_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, UPDATE_REQUEST_SUCCESS } from "./ActionType"
const URL="http://localhost:8080/products"

export const getAllProduct=payload=> async dispatch=>{
    try {
        dispatch({type:PRODUCT_REQUEST})
        await axios.get(URL,{params:{...payload}}).then(res=>{
            // console.log({res:res});
            dispatch({type:GET_REQUEST_SUCCESS,payload:res.data})
        }).catch(err=>{
     dispatch({type:PRODUCT_REQUEST_FAIL})
    })
} catch (error) {
        dispatch({type:PRODUCT_REQUEST_FAIL})  
    }
    
}
export const updateProduct=(id,payload)=>dispatch=>{
    const requestURL= `${URL}/update/${id}`;
    try {
        dispatch({type:PRODUCT_REQUEST})
       return  axios.patch(requestURL,payload,
          {headers: {
              Authorization: JSON.parse(localStorage.getItem("token")) || "",
            }
          }).then(res=>{
          dispatch({type:UPDATE_REQUEST_SUCCESS,payload:res.data})
          return res.data
          })
    } catch (error) {
        dispatch({type:PRODUCT_REQUEST_FAIL})  
    }
}

export const DeletelProduct=payload=>dispatch=>{

    try {
        dispatch({type:PRODUCT_REQUEST})
        return  axios.delete(`${URL}/delete/${payload}`,{headers:{Authorization:JSON.parse(localStorage.getItem("token"))||""}}).then(res=>{
            dispatch({type:DELETE_REQUEST_SUCCESS,payload})
            return res.data
        })
    } catch (error) {
        dispatch({type:PRODUCT_REQUEST_FAIL})  
    }
}
export const AddProduct=(payload)=>dispatch=>{
    try {
        
        dispatch({type:PRODUCT_REQUEST})
        return axios.post(`${URL}/add`,payload,{headers:{Authorization:JSON.parse(localStorage.getItem("token"))||""}}).then(res=>{
            dispatch({type:POST_REQUEST_SUCCESS,payload:res.data})
            return res.data
        })
    } catch (error) {
        dispatch({type:PRODUCT_REQUEST_FAIL})  
        
    }

}