import React, { useState } from 'react';
import Logo from '../../components/logo';
import TextField from '../../components/form/textField';
import { NavLink } from 'react-router-dom';
import AuthButton from '../../components/button/authButton';

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='flex min-h-screen justify-center pt-40 font-poppins'>
      <div className='flex-col items-center space-y-10'>
        <div className='flex justify-center'>
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className='w-[350px] space-y-4'>
          <p className='text-center text-2xl'>
            Welcome To CRM System Register Your Account
          </p>
          <TextField
            label='First name'
            name='firstName'
            value={data.firstName}
            onChange={handleChange}
          />
          <TextField
            label='Last name'
            name='lastName'
            value={data.lastName}
            onChange={handleChange}
          />
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
            <AuthButton label='REGISTER' />
            <NavLink
              to='/auth/signIn'
              className='rounded-lg px-2 py-1 hover:bg-black/[0.1]'
            >
              Sign In!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
