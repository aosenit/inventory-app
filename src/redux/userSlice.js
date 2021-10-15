import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
    publicUser: null,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isError = false;
      state.currentUser = null;
    },

    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    logout: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("persist:root");
      state.currentUser = null;
    },

    publicUser: (state, action) => {
      state.publicUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, logout, publicUser } =
  userSlice.actions;

export default userSlice.reducer;
