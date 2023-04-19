import React, { useState } from 'react';
import ContactsIcon from './icons/contactsIcon';
import CalendarIcon from './icons/calendarIcon';
import ProjectIcon from './icons/projectIcon';
import LogOutIcon from './icons/logOutIcon';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/features/authSlice';

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dispatch = useDispatch();
  return (
    <nav className='relative flex h-[1022px] min-w-[226px] flex-col font-poppins text-xl'>
      <ul className='mt-[46px] flex-col space-y-12 '>
        <li>
          <NavLink
            to='/contacts'
            className={`flex items-center gap-2 py-2 pl-4 hover:bg-yellow/[0.2] ${
              activeMenu === 'contacts'
                ? 'border-l-[6px] border-yellow bg-yellow/[0.2] pl-[10px]'
                : ''
            }`}
            onClick={() => setActiveMenu('contacts')}
          >
            <ContactsIcon />
            <span>Total Contacts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/calendar'
            className={`flex items-center gap-2 py-2 pl-4 hover:bg-yellow/[0.2] ${
              activeMenu === 'calendar'
                ? 'border-l-[6px] border-yellow bg-yellow/[0.2] pl-[10px]'
                : ''
            }`}
            onClick={() => setActiveMenu('calendar')}
          >
            <CalendarIcon />
            <span>Calendar</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projectReport'
            className={`flex items-center gap-2 py-2 pl-4 hover:bg-yellow/[0.2] ${
              activeMenu === 'projectReport'
                ? 'border-l-[6px] border-yellow bg-yellow/[0.2] pl-[10px]'
                : ''
            }`}
            onClick={() => setActiveMenu('projectReport')}
          >
            <ProjectIcon />
            <span>Project Report</span>
          </NavLink>
        </li>
      </ul>
      <button
        onClick={() => dispatch(logOut())}
        className='absolute bottom-0 flex w-full items-center justify-center gap-2 border-t border-black/[0.2] py-6'
      >
        <LogOutIcon />
        <span>Log out</span>
      </button>
    </nav>
  );
};

export default NavBar;
