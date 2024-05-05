import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count = state.count + 2;
    },
    decreaseCount: (state) => {
      state.count = state.count - 2;
    },
  },
});

export const { increaseCount, decreaseCount } = cartSlice.actions;
cartSlice.reducer;

export default cartSlice.reducer;
