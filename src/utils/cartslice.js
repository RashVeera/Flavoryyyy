import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCaRT:(state,action)=>{
            state.items.length=0
        }

       
    }
})

export const {addItem,removeItem,clearCaRT}=cartslice.actions
export default cartslice.reducer