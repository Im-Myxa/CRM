import React, { useState } from 'react';
import TextField from '../../components/form/textField';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/logo';
import AuthButton from '../../components/button/authButton';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/features/authSlice';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const { error } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(data));
  };

  return (
    <div className='flex min-h-screen justify-center pt-40 font-poppins'>
      <div className='flex-col items-center space-y-10'>
        <div className='flex justify-center'>
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className='w-[350px] space-y-4'>
          <p className='text-center text-2xl'>
            Welcome To CRM System Sign In To Your Account
          </p>
          {error && (
            <div className='border border-red-500 bg-red-200 p-2 text-center font-bold'>
              {error}
            </div>
          )}
          <TextField
            label='Email'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            value={data.password}
            onChange={handleChange}
          />
          <div className='flex items-center justify-between'>
            <AuthButton label='SIGN IN' onHandleSubmit={handleSubmit} />
            <NavLink
              to='/auth/signUp'
              className='rounded-lg px-2 py-1 hover:bg-black/[0.1]'
            >
              No account? To register!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
