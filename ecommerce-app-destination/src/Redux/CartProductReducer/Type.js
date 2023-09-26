import axios from "axios"
import { GET_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL } from "./ActionType"
import { CartProductUrl } from "../../Url/Url"

export const getAllProduct=()=>async dispatch=>{
try {
    dispatch({type:PRODUCT_REQUEST})
   return await axios.get(CartProductUrl,{headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then(res=>{
console.log({res});
dispatch({type:GET_REQUEST_SUCCESS,payload:res})
return res

    }).catch(error=>{
        dispatch({type:PRODUCT_REQUEST_FAIL})
    })
} catch (error) {
   dispatch({type:PRODUCT_REQUEST_FAIL})
}
}
export const deleteProduct=()=>async dispatch=>{
try {
    
} catch (error) {
    
}
}
