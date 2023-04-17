import React from 'react';
import SearchIcon from './icons/searchIcon';
import Clear from './icons/clear';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, addSearch } from '../store/features/searchSlice.js';

const Search = () => {
  const { searchValue } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleClearInput = () => {
    dispatch(clearSearch());
  };

  const handleSearch = value => {
    dispatch(addSearch(value));
  };
  return (
    <div className='ml-[249px] flex items-center'>
      <div className='relative'>
        <div className='absolute left-4 top-[18px]'>
          <SearchIcon />
        </div>
        <input
          type='text'
          value={searchValue}
          placeholder='Search by Name...'
          className='h-[51px] w-[483px] bg-background pl-10'
          onChange={event => handleSearch(event.target.value)}
        />
        {searchValue && (
          <button
            onClick={handleClearInput}
            className='absolute right-2 top-[14px]'
          >
            <Clear />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
