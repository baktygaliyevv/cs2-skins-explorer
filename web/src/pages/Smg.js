import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';
import PaginationComponent from '../Components/Pagination';

const SMG = ({ category }) => {
  const [smgs, setSmgs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [smgsPerPage] = useState(32); 
  const [isAllSmgs, setIsAllSmgs] = useState(!category); 

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/smgs/${category}` : 
                                'http://127.0.0.1:8000/skins/smgs';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSmgs(data);
        setIsAllSmgs(!category); 
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);

  const indexOfLastSmg = currentPage * smgsPerPage;
  const indexOfFirstSmg = indexOfLastSmg - smgsPerPage;
  const currentSmgs = isAllSmgs ? smgs.slice(indexOfFirstSmg, indexOfLastSmg) : smgs;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {isAllSmgs && <PaginationComponent itemsPerPage={smgsPerPage} totalItems={smgs.length} paginate={paginate} />}
      <Row>
        {currentSmgs.map((smg, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={smg.name}
              text={smg.rarity}
              img_src={smg.image}
            />
          </Col>
        ))}
      </Row>
      {isAllSmgs && <PaginationComponent itemsPerPage={smgsPerPage} totalItems={smgs.length} paginate={paginate} />}
    </Container>
  );
};

export default SMG;
