import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ label }) => {
  return (
    <button
      type='button'
      className='border border-black px-2 py-1 hover:bg-black hover:text-white'
    >
      {label}
    </button>
  );
};

AuthButton.propTypes = {
  label: PropTypes.string
};

export default AuthButton;
