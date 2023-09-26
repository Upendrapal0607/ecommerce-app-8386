import axios from "axios"
import { PRODUCT_REQUEST } from "./ActionType"
import { CartProductUrl } from "../../Url/Url"

export const getAllProduct=()=>async dispatch=>{
try {
    dispatch({type:PRODUCT_REQUEST})
    axios.get(CartProductUrl,{headers:{Authorization:JSON.parse(localStorage.getItem("token"))}}).then(res=>{
console.log({res});

    }).catch(error=>{
        console.log({error});
    })
} catch (error) {
   
}
}
export const deleteProduct=()=>async dispatch=>{
try {
    
} catch (error) {
    
}
}
