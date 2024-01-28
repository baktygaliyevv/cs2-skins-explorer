import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function OffcanvasExample() {
  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
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
                <NavDropdown.Item href="/knives">Knife1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gloves" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/gloves">Knife1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Rifles" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/rifles">Knife1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pistols" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/pistols">Knife1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SMG" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/smg">Knife1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Heavy" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/heavy">Knife1</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/agent">Agent</Nav.Link>
              <Nav.Link href="/container">Container</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="mx-1" variant="outline-light">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={Home}/>
          <Route exact path="/knives" element={<Knives/>}/>
          <Route exact path="/gloves" element={<Gloves/>}/>
          <Route exact path="/rifles" element={<Rifles/>}/>
          <Route exact path="/pistols" element={<Pistols/>}/>
          <Route exact path="/smg" element={<Smg/>}/>
          <Route exact path="/heavy" element={<Heavy/>}/>
          <Route exact path="/agent" element={<Agent/>}/>
          <Route exact path="/container" element={<Container/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default OffcanvasExample;