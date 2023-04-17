import React from 'react';
import PropTypes from 'prop-types';
import EditButton from '../button/editButton';
import DeleteButton from '../button/deleteButton';

const TableBody = ({ contacts }) => {
  return (
    <tbody className='h-78'>
      {contacts.map(contact => {
        return (
          <>
            <tr
              key={contact.clientId}
              className='bg-white shadow-lg shadow-black/[0.2] hover:bg-gray-100'
            >
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2'
                  />
                </div>
              </td>
              <td className='px-3 py-6'>{contact.clientId}</td>
              <td className='px-3 py-6'>{contact.clientName}</td>
              <td className='px-3 py-6'>{contact.company}</td>
              <td className='px-3 py-6'>{contact.email}</td>
              <td className='px-3 py-6'>{contact.phoneNumber}</td>
              <td className='px-3 py-6'>
                <div className='flex items-center gap-3'>
                  <EditButton />
                  <DeleteButton />
                </div>
              </td>
            </tr>
            <tr className='h-3'>
              <td></td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  contacts: PropTypes.array
};

export default TableBody;
