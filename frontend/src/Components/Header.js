import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import search from './search.svg';

import Agent from '../pages/Agents';
import Container from '../pages/Container';
import Gloves from '../pages/Gloves';
import Heavy from '../pages/Heavy';
import Knives from '../pages/Knives';
import Pistols from '../pages/Pistols';
import Rifles from '../pages/Rifles';
import Smg from '../pages/Smg';

function Header() {
  return (
    <>
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
        <Navbar.Brand className="mx-4" href="/">CS2 SKINS</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Navbar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <NavDropdown title="Knives" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allknives">All Knives</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Bowie</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Butterfly</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Classic</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Falchion</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Flip</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Gut</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Huntsman</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Karambit</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">M9 Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Navaja</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Nomad</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Paracord</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Shadow Daggers</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Skeleton</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Stiletto</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Survival</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Talon</NavDropdown.Item>
                <NavDropdown.Item href="/allknives">Ursus</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gloves" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allgloves">All Gloves</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Rifles" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allrifles">All Rifles</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pistols" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allpistols">All Pistols</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SMG" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allsmg">All SMG</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Heavy" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allheavy">All Heavy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/agent">Agent</Nav.Link>
              <Nav.Link href="/container">Container</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button className="mx-2" variant="light"><img src={search} alt="Search" width={20} height={25} style={{cursor: 'pointer'}} /*onClick={функция поиска}*/ /></Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/allknives" element={<Knives/>}/>
          <Route exact path="/allgloves" element={<Gloves/>}/>
          <Route exact path="/allrifles" element={<Rifles/>}/>
          <Route exact path="/allpistols" element={<Pistols/>}/>
          <Route exact path="/allsmg" element={<Smg/>}/>
          <Route exact path="/allheavy" element={<Heavy/>}/>
          <Route exact path="/agent" element={<Agent/>}/>
          <Route exact path="/container" element={<Container/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default Header;
