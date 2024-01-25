import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
      <Navbar.Brand className="mx-4" href="#">CS2 SKINS</Navbar.Brand>
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
              <NavDropdown.Item href="#action3">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Knife2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gloves" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action5">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Knife2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rifles" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action7">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Knife2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pistols" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action9">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action">Knife2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SMG" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action11">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action23">Knife2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Heavy" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action21">Knife1</NavDropdown.Item>
              <NavDropdown.Item href="#action22">Knife2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action92">Agent</Nav.Link>
            <Nav.Link href="#action122">Container</Nav.Link>
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
  );
}

export default OffcanvasExample;
