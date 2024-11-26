import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';
import PaginationComponent from '../Components/Pagination';

const Gloves = ({ category }) => {
  const [gloves, setGloves] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [GlovesPerPage] = useState(32); 
  const [isAllGloves, setIsAllGloves] = useState(!category); 

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/gloves/${category}` : 
                                'http://127.0.0.1:8000/skins/gloves';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGloves(data);
        setIsAllGloves(!category); 
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);

  const indexOfLastGlove = currentPage * GlovesPerPage;
  const indexOfFirstGlove = indexOfLastGlove - GlovesPerPage;
  const currentGloves = isAllGloves ? gloves.slice(indexOfFirstGlove, indexOfLastGlove) : gloves;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {isAllGloves && <PaginationComponent itemsPerPage={GlovesPerPage} totalItems={gloves.length} paginate={paginate} />}
      <Row>
        {currentGloves.map((glove, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={glove.name}
              text={glove.rarity}
              img_src={glove.image}
            />
          </Col>
        ))}
      </Row>
      {isAllGloves && <PaginationComponent itemsPerPage={GlovesPerPage} totalItems={gloves.length} paginate={paginate} />}
    </Container>
  );
};

export default Gloves;