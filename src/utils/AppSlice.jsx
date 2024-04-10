import { createSlice } from "@reduxjs/toolkit";



const AppSlice=createSlice({
    name:"Formdata",
    initialState:{
       formdataList:[]
       
    },
    reducers:{
        addFormdata:(state,action)=>{
            state.formdataList.push(action.payload)
        },
        clearformdata:(state,action)=>{
            state.formdataList.pop()
        }
 
    }
})

export const {addFormdata,clearformdata}=AppSlice.actions
export default AppSlice.reducer