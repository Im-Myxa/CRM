import React from 'react';
import PropTypes from 'prop-types';

const Paginate = ({ pageSize }) => {
  return (
    <nav>
      <ul>
        <li>{pageSize}</li>
      </ul>
    </nav>
  );
};

Paginate.propTypes = {
  pageSize: PropTypes.number
};

export default Paginate;
