import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
};

const AuthenticSlice = createSlice({
  name: "authenticity",
  initialState,
  reducers: {
    loginFunction: (state) => {
      state.isLoggedin = true;
      console.log("isLoggedin", state.isLoggedin);
    },
    logoutFunction: (state) => {
      state.isLoggedin = false;
      console.log("isLoggedin", state.isLoggedin);
    },
  },
});

export const { loginFunction, logoutFunction } = AuthenticSlice.actions;

export default AuthenticSlice.reducer;
