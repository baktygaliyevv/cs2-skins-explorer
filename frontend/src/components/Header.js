import React, {Component} from 'react';
import {FormControl, Navbar, Nav, Container, Form, Button} from 'react-bootstrap';
import logo from './logo.png';
import lupa from './lupa.png';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collpaseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img 
                                src = {logo}
                                height = "70"
                                width = "70"
                                // className='d-inline-block align-top'
                                alt="Logo"
                            /> CS2 SKINS
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Knives </Nav.Link>
                                <Nav.Link href="/"> Gloves </Nav.Link>
                                <Nav.Link href="/"> Pistols </Nav.Link>
                                <Nav.Link href="/"> Mid-Tier </Nav.Link>
                                <Nav.Link href="/"> Rifles </Nav.Link>
                                <Nav.Link href="/"> Cases </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl 
                                    type="text"
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant="outline-info">
                                    <img 
                                        src={lupa} 
                                        height = "20"
                                        width="16"
                                    />
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
