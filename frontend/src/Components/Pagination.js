import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const [active, setActive] = useState(1);

  for (let number = 1; number <= Math.ceil(totalItems / itemsPerPage); number++) {
    pageNumbers.push(
      <Pagination.Item key={number} active={number === active} onClick={() => {
        paginate(number);
        setActive(number);
      }}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
};

export default PaginationComponent;
