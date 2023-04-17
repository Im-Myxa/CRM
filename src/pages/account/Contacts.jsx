import React, { useEffect, useState } from 'react';
import AddContact from '../../components/button/addContactButton';
import Table from '../../components/table/table';
import Paginate from '../../components/paginate';
import { paginate } from '../../utils/paginate';
import { contacts } from '../../api/contacts';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const { searchValue } = useSelector(state => state.search);

  const handlePageChange = pageIndex => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const searchContacts = contacts.filter(contact => {
    return contact.clientName.toLowerCase().includes(searchValue.toLowerCase());
  });
  const contactsCrop = paginate(searchContacts, currentPage, pageSize);
  const itemsCount = searchContacts.length;

  return (
    <div>
      <div className='mx-7 my-5 flex items-center justify-between'>
        <p className='font-poppins text-[32px]'>Total Contacts</p>
        <AddContact />
      </div>
      <div className='mx-7'>
        <Table contacts={contactsCrop} />
      </div>
      <Paginate
        pageSize={pageSize}
        itemsCount={itemsCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Contacts;
