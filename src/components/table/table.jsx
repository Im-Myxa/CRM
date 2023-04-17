import React from 'react';
import PropTypes from 'prop-types';
import TableHead from './tableHead';
import TableBody from './tableBody';

const Table = ({ contacts }) => {
  return (
    <table className='w-full text-left font-roboto text-xl'>
      <TableHead />
      <TableBody contacts={contacts} />
    </table>
  );
};

Table.propTypes = {
  contacts: PropTypes.array
};

export default Table;
