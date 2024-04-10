import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";


const appStore=configureStore({
    reducer:{
        FormData:AppSlice

    }
})

export default appStore