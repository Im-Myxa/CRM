import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../api/users';

const initialState = {
  user: null,
  error: null,
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.user = null;
      state.error = null;
      state.isAuth = false;
    },
    logIn: (state, action) => {
      const data = users.filter(user => {
        return user.email === action.payload.email;
      });

      if (data.length === 0) {
        state.error = 'Invalid email or password';
        return;
      } else {
        if (data[0].password !== action.payload.password) {
          state.error = 'Invalid email or password';
          return;
        }
        state.user = data[0];
        state.error = null;
        state.isAuth = true;
      }
    },
    register: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    }
  },
  extraReducers: {}
});

export const { logOut, logIn, register } = authSlice.actions;

export default authSlice.reducer;
