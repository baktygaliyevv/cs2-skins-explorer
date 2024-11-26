import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';
import PaginationComponent from '../Components/Pagination';

const Pistols = ({ category }) => {
  const [pistols, setPistols] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pistolsPerPage] = useState(32); 
  const [isAllPistols, setIsAllPistols] = useState(!category); 

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/pistols/${category}` : 
                                'http://127.0.0.1:8000/skins/pistols';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPistols(data);
        setIsAllPistols(!category); 
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);

  const indexOfLastPistol = currentPage * pistolsPerPage;
  const indexOfFirstPistol = indexOfLastPistol - pistolsPerPage;
  const currentPistols = isAllPistols ? pistols.slice(indexOfFirstPistol, indexOfLastPistol) : pistols;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container>
      {isAllPistols && <PaginationComponent itemsPerPage={pistolsPerPage} totalItems={pistols.length} paginate={paginate} />}
      <Row>
        {currentPistols.map((pistol, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={pistol.name}
              text={pistol.rarity}
              img_src={pistol.image}
            />
          </Col>
        ))}
      </Row>
      {isAllPistols && <PaginationComponent itemsPerPage={pistolsPerPage} totalItems={pistols.length} paginate={paginate} />}
    </Container>
  );
};

export default Pistols;
