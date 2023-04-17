import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch: state => {
      state.searchValue = '';
    },
    addSearch: (state, action) => {
      state.searchValue = action.payload;
    }
  },
  extraReducers: {}
});

export const { clearSearch, addSearch } = searchSlice.actions;

export default searchSlice.reducer;
