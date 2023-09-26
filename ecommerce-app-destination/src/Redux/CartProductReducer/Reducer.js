import { GET_REQUEST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL } from "./ActionType"

const initialState={
    isLoading:false,
    data:[],
    isError:false
}

export const Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case PRODUCT_REQUEST : return {...state,isLoading:true}
        case GET_REQUEST_SUCCESS : return {...state,isLoading:false,data:payload.res.AllCartData}
        case PRODUCT_REQUEST_FAIL : return {...state,isLoading:false,data:[],isError:true}
        default: return state
           
    }
}