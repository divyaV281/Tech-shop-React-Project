import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from './addCartReducer'

const store = configureStore({
    reducer:{
        cartData: addCartReducer,
    }
})

export default store