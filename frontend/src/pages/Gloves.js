import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';

const Gloves = () => {
  const [gloves, setGloves] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/skins/Gloves')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setGloves(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <Container>
      <Row>
        {gloves.map((glove, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={glove.name}
              text={glove.rarity}
              img_src={glove.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gloves;