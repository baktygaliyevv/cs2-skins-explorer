import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';

export default class Agents extends Component {
    render() {
        return(
            <Container>
                <Row>
                    {}
                    <Col className='card-component' md={6} lg={3}>
                        <CardComponent 
                            title='Agnet'
                            text='Superior Agent'
                            img_src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEp7P5gVO8vywwMiukcZiXelA2MgrU-VS-xua5hZO1upzKnHNm7icntCzZnkO30h9KOrBp1PPIVxzAUAj3mHXf/512fx384f'
                        />
                    </Col>
                    <Col className='card-component' md={6} lg={3}>
                        <CardComponent 
                            title='Agnet'
                            text='Superior Agent'
                            img_src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEp7P5gVO8vywwMiukcZiXelA2MgrU-VS-xua5hZO1upzKnHNm7icntCzZnkO30h9KOrBp1PPIVxzAUAj3mHXf/512fx384f'
                        />
                    </Col>
                    <Col className='card-component' md={6} lg={3}>
                        <CardComponent 
                            title='Agent'
                            text='Superior Agent'
                            img_src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEp7P5gVO8vywwMiukcZiXelA2MgrU-VS-xua5hZO1upzKnHNm7icntCzZnkO30h9KOrBp1PPIVxzAUAj3mHXf/512fx384f'
                        />
                    </Col>
                    <Col className='card-component' md={6} lg={3}>
                        <CardComponent 
                            title='Agent'
                            text='Superior Agent'
                            img_src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEp7P5gVO8vywwMiukcZiXelA2MgrU-VS-xua5hZO1upzKnHNm7icntCzZnkO30h9KOrBp1PPIVxzAUAj3mHXf/512fx384f'
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
