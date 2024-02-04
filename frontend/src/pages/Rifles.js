import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';

const Rifles = () => {
  const [rifles, setRifles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/skins/Rifles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setRifles(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <Container>
      <Row>
        {rifles.map((rifle, index) => (
          <Col className='card-component' key={index} sm={12} md={6} lg={3}>
            <CardComponent
              title={rifle.name}
              text={rifle.rarity}
              img_src={rifle.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rifles;