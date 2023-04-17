import React from 'react';
import { generateImage } from '../utils/generateImage';

const NavProfile = () => {
  return (
    <div className='mr-10 flex items-center gap-2'>
      <img
        src={generateImage()}
        className='h-[70px] w-[66px] rounded-full border border-black'
      />
      <div className='font-poppins'>
        <p className='text-2xl'>Gus</p>
        <p className='text-sm'>Krya</p>
      </div>
    </div>
  );
};

export default NavProfile;
