import { createSlice } from "@reduxjs/toolkit";

const addCartSlice = createSlice({
    name: "addToCart",
    initialState: {
        list: []
    },
    reducers: {
        add(state, action) {
            const indexId = (state.list).findIndex(ele => ele.id === action.payload.id)
            let quantity = action.payload.quantity
            if(indexId >=0){
                state.list[indexId].quantity += quantity;
                console.log(quantity);
            } else {
                state.list.push(action.payload)
            }
            // console.log(state.list[indexId]);
        },
        remove(state,action) {
            state.list =  (state.list).filter(ele => ele.id !== (action.payload))
        },
        changeQuantity(state,action){
            let quantity = action.payload.quantity;
            const indexId = (state.list).findIndex(ele => ele.id === action.payload.id)
            // console.log(state.list[indexId].quantity);
            
            if(quantity>0){
                state.list[indexId].quantity = quantity;
            } else{
                state.list =  (state.list).filter(ele => ele.id !== (action.payload.id))
            }
        }
    }
})

export default addCartSlice.reducer
export const { add, remove, changeQuantity } = addCartSlice.actions