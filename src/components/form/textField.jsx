import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InvisiblePassword from '../icons/invisiblePassord';
import VisiblePassword from '../icons/visiblePassword';

const TextField = ({ label, type, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='font-roboto font-bold'>
        {' '}
        {label}
      </label>
      <div className='relative flex items-center'>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className='h-[40px] w-[350px] border border-black pl-2 font-roboto'
        />

        {type === 'password' && (
          <button
            className='absolute left-[320px]'
            type='button'
            onClick={toggleShowPassword}
          >
            {showPassword ? <InvisiblePassword /> : <VisiblePassword />}
          </button>
        )}
        {/* {error && <div className=' '>{error}</div>} */}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
