import React from 'react';
import ArrowUp from '../icons/arrowUp';
import ArrowDown from '../icons/arrowDown';

const TableHead = () => {
  const columns = [
    { name: 'Client ID', sort: true },
    { name: 'Client name', sort: true },
    { name: 'Company', sort: true },
    { name: 'Email', sort: false },
    { name: 'Phone number', sort: false },
    { name: 'Action', sort: false }
  ];
  return (
    <thead className='border-b bg-white uppercase'>
      <tr>
        <th className='p-4'>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2'
            />
            <div className='flex flex-col space-y-[2px]'>
              <ArrowUp />
              <ArrowDown />
            </div>
          </div>
        </th>
        {columns.map(column => {
          return (
            <th className='px-3 py-5' key={column.name}>
              <div className='flex items-center gap-2'>
                {column.name}
                {column.sort ? (
                  <div className='flex flex-col space-y-[2px]'>
                    <ArrowUp />
                    <ArrowDown />
                  </div>
                ) : null}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
