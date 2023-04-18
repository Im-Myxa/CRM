import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/searchSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
  reducer: { search: searchSlice, auth: authSlice }
});
