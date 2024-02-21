import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';
import PaginationComponent from '../Components/Pagination';

const Rifles = ({ category }) => {
  const [rifles, setRifles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [riflesPerPage] = useState(32); 
  const [isAllRifles, setIsAllRifles] = useState(!category); 

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/rifles/${category}` : 
                                'http://127.0.0.1:8000/skins/rifles';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRifles(data);
        setIsAllRifles(!category); 
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);

  const indexOfLastRifle = currentPage * riflesPerPage;
  const indexOfFirstRifle = indexOfLastRifle - riflesPerPage;
  const currentRifles = isAllRifles ? rifles.slice(indexOfFirstRifle, indexOfLastRifle) : rifles;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {isAllRifles && <PaginationComponent itemsPerPage={riflesPerPage} totalItems={rifles.length} paginate={paginate} />}
      <Row>
        {currentRifles.map((rifle, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={rifle.name}
              text={rifle.rarity}
              img_src={rifle.image}
            />
          </Col>
        ))}
      </Row>
      {isAllRifles && <PaginationComponent itemsPerPage={riflesPerPage} totalItems={rifles.length} paginate={paginate} />}
    </Container>
  );
};

export default Rifles;
