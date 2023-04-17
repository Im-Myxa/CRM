import React, { useEffect, useState } from 'react';
import AddContact from '../../components/button/addContactButton';
import Table from '../../components/table/table';
import Paginate from '../../components/paginate';
import { paginate } from '../../utils/paginate';
import { contacts } from '../../api/contacts';

const Contacts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const contactsCrop = paginate(contacts, currentPage, pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div>
      <div className='mx-7 my-5 flex items-center justify-between'>
        <p className='font-poppins text-[32px]'>Total Contacts</p>
        <AddContact />
      </div>
      <div className='mx-7'>
        <Table contacts={contactsCrop} />
      </div>
      <Paginate pageSize={pageSize} />
    </div>
  );
};

export default Contacts;
