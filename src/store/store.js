import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import cartSlice from "./cartSlice";
export const store=configureStore({
    reducer:{
        user:userSlice,
        cart:cartSlice,
    },
});
export default store;