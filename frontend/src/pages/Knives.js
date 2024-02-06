import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';

const Knives = ({ category }) => {
  const [knives, setKnives] = useState([]);

  useEffect(() => {
    const endpoint = category ? `http://127.0.0.1:8000/skins/knives/${category}` : 'http://127.0.0.1:8000/skins/knives';
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setKnives(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category]);
  
  return (
    <Container>
      <Row>
        {knives.map((knife, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={knife.name}
              text={knife.rarity}
              img_src={knife.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Knives;
