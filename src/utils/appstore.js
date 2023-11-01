import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartslice";

const appstore=configureStore({
 reducer:{
    cart:cart
 }
})

export default appstore;