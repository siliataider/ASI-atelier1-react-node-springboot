import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      console.log('loginSucess reducer')
    },
    logout: (state) => {
      state.isLoggedIn = false;
      console.log('logout reducer')
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
