import { createSlice } from "@reduxjs/toolkit";
const initialSate = {
  isAuthenticated: false,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialSate,
  reducers: {
    login: (state, action) => {
      (state.isAuthenticated = true), (state.user = action.payload);
    },
    logout: (state) => {
      (state.isAuthenticated = false), (state.user = null);
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
