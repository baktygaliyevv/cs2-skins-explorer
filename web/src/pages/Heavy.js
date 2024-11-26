import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';
import PaginationComponent from '../Components/Pagination';

const Heavy = ({ category }) => {
  const [heavy, setHeavy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [heavyPerPage] = useState(32); 
  const [isAllHeavy, setIsAllHeavy] = useState(!category); 

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/heavy/${category}` : 
                                'http://127.0.0.1:8000/skins/heavy';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHeavy(data);
        setIsAllHeavy(!category); 
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);

  const indexOfLastKnife = currentPage * heavyPerPage;
  const indexOfFirstKnife = indexOfLastKnife - heavyPerPage;
  const currentHeavy = isAllHeavy ? heavy.slice(indexOfFirstKnife, indexOfLastKnife) : heavy;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {isAllHeavy && <PaginationComponent itemsPerPage={heavyPerPage} totalItems={heavy.length} paginate={paginate} />}
      <Row>
        {currentHeavy.map((heavy, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={heavy.name}
              text={heavy.rarity}
              img_src={heavy.image}
            />
          </Col>
        ))}
      </Row>
      {isAllHeavy && <PaginationComponent itemsPerPage={heavyPerPage} totalItems={heavy.length} paginate={paginate} />}
    </Container>
  );
};

export default Heavy;