import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const { isAuth } = useSelector(state => state.auth);

  return (
    <>
      {!isAuth ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default AuthLayout;
