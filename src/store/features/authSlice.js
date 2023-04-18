import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.user = [];
    },
    logIn: (state, action) => {
      state.user = state.user.push(action.payload);
    }
  },
  extraReducers: {}
});

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
