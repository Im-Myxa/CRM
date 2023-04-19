import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ label, onHandleSubmit }) => {
  return (
    <button
      type='button'
      onClick={onHandleSubmit}
      className='border border-black px-2 py-1 hover:bg-black hover:text-white'
    >
      {label}
    </button>
  );
};

AuthButton.propTypes = {
  label: PropTypes.string,
  onHandleSubmit: PropTypes.func
};

export default AuthButton;
