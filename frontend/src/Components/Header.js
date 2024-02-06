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
                <NavDropdown.Item href="/knives/bayonet">Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/knives/bowie">Bowie</NavDropdown.Item>
                <NavDropdown.Item href="/knives/butterfly">Butterfly</NavDropdown.Item>
                <NavDropdown.Item href="/knives/classic">Classic</NavDropdown.Item>
                <NavDropdown.Item href="/knives/falchion">Falchion</NavDropdown.Item>
                <NavDropdown.Item href="/knives/flip">Flip</NavDropdown.Item>
                <NavDropdown.Item href="/knives/gut">Gut</NavDropdown.Item>
                <NavDropdown.Item href="/knives/huntsman">Huntsman</NavDropdown.Item>
                <NavDropdown.Item href="/knives/karambit">Karambit</NavDropdown.Item>
                <NavDropdown.Item href="/knives/m9bayonet">M9 Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/knives/navaja">Navaja</NavDropdown.Item>
                <NavDropdown.Item href="/knives/nomad">Nomad</NavDropdown.Item>
                <NavDropdown.Item href="/knives/paracord">Paracord</NavDropdown.Item>
                <NavDropdown.Item href="/knives/shadowdaggers">Shadow Daggers</NavDropdown.Item>
                <NavDropdown.Item href="/knives/skeleton">Skeleton</NavDropdown.Item>
                <NavDropdown.Item href="/knives/stiletto">Stiletto</NavDropdown.Item>
                <NavDropdown.Item href="/knives/survival">Survival</NavDropdown.Item>
                <NavDropdown.Item href="/knives/talon">Talon</NavDropdown.Item>
                <NavDropdown.Item href="/knives/ursus">Ursus</NavDropdown.Item>
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
          <Route path="/knives/bayonet" element={<Knives category="Bayonet"/>} />
          <Route path="/knives/bowie" element={<Knives category="Bowie"/>} />
          <Route path="/knives/butterfly" element={<Knives category="Butterfly"/>} />
          <Route path="/knives/classic" element={<Knives category="Classic"/>} />
          <Route path="/knives/falchion" element={<Knives category="Falchion"/>} />
          <Route path="/knives/flip" element={<Knives category="Flip"/>} />
          <Route path="/knives/gut" element={<Knives category="Gut"/>} />
          <Route path="/knives/huntsman" element={<Knives category="Huntsman"/>} />
          <Route path="/knives/karambit" element={<Knives category="Karambit"/>} />
          <Route path="/knives/m9bayonet" element={<Knives category="M9 Bayonet"/>} />
          <Route path="/knives/navaja" element={<Knives category="Navaja"/>} />
          <Route path="/knives/nomad" element={<Knives category="Nomad"/>} />
          <Route path="/knives/paracord" element={<Knives category="Paracord"/>} />
          <Route path="/knives/shadowdaggers" element={<Knives category="Shadow Daggers"/>} />
          <Route path="/knives/skeleton" element={<Knives category="Skeleton"/>} />
          <Route path="/knives/stiletto" element={<Knives category="Stiletto"/>} />
          <Route path="/knives/survival" element={<Knives category="Survival"/>} />
          <Route path="/knives/talon" element={<Knives category="Talon"/>} />
          <Route path="/knives/ursus" element={<Knives category="Ursus"/>} />

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
