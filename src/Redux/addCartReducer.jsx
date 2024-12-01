import { createSlice } from "@reduxjs/toolkit";

const addCartSlice = createSlice({
    name: "addToCart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
            console.log(action);
            // console.log(state);
        },
        remove(state,action) {
            return state.filter(ele => ele.id !== (action.payload))
        }
    }
})

export default addCartSlice.reducer
export const { add, remove } = addCartSlice.actions