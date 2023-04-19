import React, { useEffect, useState } from 'react';
import Logo from '../../components/logo';
import TextField from '../../components/form/textField';
import { NavLink } from 'react-router-dom';
import AuthButton from '../../components/button/authButton';
import { useDispatch } from 'react-redux';
import { register } from '../../store/features/authSlice';
import { generateImage } from '../../utils/generateImage';
import { validator } from '../../utils/validator';

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    image: generateImage()
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'E-mail is required'
      },
      isEmail: {
        message: 'Email entered incorrectly'
      }
    },
    firstName: {
      isRequired: {
        message: 'The name is required'
      },
      min: {
        message: 'The name must contain at least 3 characters',
        value: 3
      }
    },
    lastName: {
      isRequired: {
        message: 'Last name is required'
      },
      min: {
        message: 'The last name must contain at least 3 characters',
        value: 3
      }
    },
    company: {
      isRequired: {
        message: 'The company is required'
      },
      min: {
        message: 'The company must contain at least 3 characters',
        value: 3
      }
    },
    password: {
      isRequired: {
        message: 'Password is required'
      },
      isCapitalSymbol: {
        message: 'The password must contain a capital letter'
      },
      isContainDigit: {
        message: 'The password must contain at least one number'
      },
      min: {
        message: 'The password must contain at least 8 characters',
        value: 8
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(register(data));
  };
  return (
    <div className='flex min-h-screen justify-center pt-40 font-poppins'>
      <div className='flex-col items-center space-y-10'>
        <div className='flex justify-center'>
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className='w-[350px] space-y-2'>
          <p className='text-center text-2xl'>
            Welcome To CRM System Register Your Account
          </p>
          <TextField
            label='First name'
            name='firstName'
            value={data.firstName}
            error={errors.firstName}
            onChange={handleChange}
          />
          <TextField
            label='Last name'
            name='lastName'
            value={data.lastName}
            error={errors.lastName}
            onChange={handleChange}
          />
          <TextField
            label='Company'
            name='company'
            value={data.company}
            error={errors.company}
            onChange={handleChange}
          />
          <TextField
            label='Email'
            name='email'
            value={data.email}
            error={errors.email}
            onChange={handleChange}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            value={data.password}
            error={errors.password}
            onChange={handleChange}
          />
          <div className='flex items-center justify-between pt-2'>
            <AuthButton
              label='REGISTER'
              onHandleSubmit={handleSubmit}
              isValid={isValid}
            />
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
