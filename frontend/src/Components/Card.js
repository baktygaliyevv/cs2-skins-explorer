import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardComponent(props) {
  return (
    <Card style={{ width: '18rem', height: '28rem' }}>
      <Card.Img variant="top" src={props.img_src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Steam Price (10-200)</ListGroup.Item>
        <ListGroup.Item>Case, collection or smth</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Inspect in-game</Card.Link>
        <Card.Link href="#">Steam prices</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;