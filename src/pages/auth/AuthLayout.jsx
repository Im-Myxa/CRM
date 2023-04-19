import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const { isAuth } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
