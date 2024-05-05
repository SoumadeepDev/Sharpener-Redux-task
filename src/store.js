import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import authenticReducer from "./features/AuthenticSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    authenticity: authenticReducer,
  },
});
