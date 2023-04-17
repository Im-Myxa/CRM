import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from './icons/chevronLeft';
import ChevronRight from './icons/chevronRight';

const Paginate = ({ pageSize, itemsCount, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (pagesCount === 1) return null;
  return (
    <nav className='flex w-full items-center justify-end gap-2 px-7 py-6 text-xl'>
      {currentPage === 1 ? (
        <button className='disabled:opacity-50' disabled>
          <ChevronLeft />
        </button>
      ) : (
        <button type='button' onClick={() => onPageChange(currentPage - 1)}>
          <ChevronLeft />
        </button>
      )}
      <ul className='flex items-center gap-2'>
        {pages.map(page => {
          return (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`px-2 ${
                  page === currentPage
                    ? 'rounded-full bg-yellow text-white'
                    : ''
                }`}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
      {currentPage === pagesCount ? (
        <button className='disabled:opacity-50' disabled>
          <ChevronRight />
        </button>
      ) : (
        <button type='button' onClick={() => onPageChange(currentPage + 1)}>
          <ChevronRight />
        </button>
      )}
    </nav>
  );
};

Paginate.propTypes = {
  pageSize: PropTypes.number,
  itemsCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default Paginate;
