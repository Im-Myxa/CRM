import React from 'react';
import SearchIcon from './icons/searchIcon';

const Search = () => {
  return (
    <div className='ml-[249px] flex items-center'>
      <div className='relative'>
        <div className='absolute left-4 top-[18px]'>
          <SearchIcon />
        </div>
        <input
          type='text'
          placeholder='Search by Name...'
          className='h-[51px] w-[483px] bg-background pl-10'
        />
      </div>
    </div>
  );
};

export default Search;
