import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { Reducer as ProductReducer } from "./ProductReducer/Reducer"
import { Reducer as UserReducer } from "./UserReducer/Reducer"
// import { Reducer as ProductReducer } from "./ProductReducer/Reducer"
// import {  Reducer as UserReducer } from "./UserReducer/Reducer"
// import {} from "./Reducer"
const rootReducer=combineReducers({
    ProductReducer,UserReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))