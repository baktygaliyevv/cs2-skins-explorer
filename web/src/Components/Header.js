import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import search from './search.svg';

import Agent from '../pages/Agents';
import Container from '../pages/Container';
import SkinsComponent from './SkinsComponent';

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
                <NavDropdown.Item href="/knives/all">All Knives</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/knives/Bayonet">Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Bowie">Bowie</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Butterfly">Butterfly</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Classic">Classic</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Falchion">Falchion</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Flip">Flip</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Gut">Gut</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Huntsman">Huntsman</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Karambit">Karambit</NavDropdown.Item>
                <NavDropdown.Item href="/knives/M9 Bayonet">M9 Bayonet</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Navaja">Navaja</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Nomad">Nomad</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Paracord">Paracord</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Shadow Daggers">Shadow Daggers</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Skeleton">Skeleton</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Stiletto">Stiletto</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Survival">Survival</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Talon">Talon</NavDropdown.Item>
                <NavDropdown.Item href="/knives/Ursus">Ursus</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gloves" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allgloves">All Gloves</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/gloves/Bloodhound Gloves">Bloodhound Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Driver Gloves">Driver Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Hand Wraps">Hand Wraps</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Hydra Gloves">Hydra Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Moto Gloves">Moto Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Specialist Gloves">Specialist Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Sport Gloves">Sport Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/Broken Fang Gloves">Broken Fang Gloves</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Rifles" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/rifles/all">All Rifles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/rifles/AK-47">AK-47</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/aug">AUG</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/awp">AWP</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/famas">FAMAS</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/g3sg1">G3SG1</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/Galil AR">Galil AR</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/M4A1-S">M4A1-S</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/m4a4">M4A4</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/SCAR-20">SCAR-20</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/SG 553">SG 553</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/SSG 08">SSG 08</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pistols" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/pistols/all">All Pistols</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pistols/Zeus x27">Zeus x27</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pistols/CZ75-Auto">CZ75-Auto</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/Desert Eagle">Desert Eagle</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/dual berettas">Dual Berettas</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/Five-SeveN">Five-SeveN</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/Glock-18">Glock-18</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/p2000">P2000</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/p250">P250</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/R8 Revolver">R8 Revolver</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/Tec-9">Tec-9</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/USP-S">USP-S</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SMG" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/smg/all">All SMG</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/smgs/MAC-10">MAC-10</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/MP5-SD">MP5-SD</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mp7">MP7</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mp9">MP9</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/PP-Bizon">PP-Bizon</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/p90">P90</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/UMP-45">UMP-45</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Heavy" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/heavy/all">All Heavy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/heavy/MAG-7">MAG-7</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/nova">Nova</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/Sawed-Off">Sawed-Off</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/xm1014">XM1014</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/m249">M249</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/negev">Negev</NavDropdown.Item>
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
          {/* All items for specific category */}
          <Route
            path="/:category/all"
            element={
              <SkinsComponent
                apiEndpoint="http://127.0.0.1:8000/skins"
              />
            }
          />

          {/* Specific subcategory */}
          <Route
            path="/:category/:subcategory"
            element={
              <SkinsComponent
                apiEndpoint="http://127.0.0.1:8000/skins"
              />
            }
          />

          {/* Agents and Containers */}
          <Route exact path="/agent" element={<Agent />} />
          <Route exact path="/container" element={<Container />} />
        </Routes>
      </Router>

    </>
  );
}

export default Header;
