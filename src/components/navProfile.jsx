import React from 'react';
import { useSelector } from 'react-redux';

const NavProfile = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className='mr-10 flex items-center gap-2'>
      <img
        src={user.image}
        className='h-[70px] w-[66px] rounded-full border border-black'
      />
      <div className='font-poppins'>
        <p className='text-2xl'>{user.name}</p>
        {/* <p className='text-sm'>Krya</p> */}
      </div>
    </div>
  );
};

export default NavProfile;
