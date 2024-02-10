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
                <NavDropdown.Divider />
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
                <NavDropdown.Divider />
                <NavDropdown.Item href="/gloves/bloodhound">Bloodhound Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/driver">Driver Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/handwrap">Hand Wraps</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/hydra">Hydra Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/moto">Moto Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/specialist">Specialist Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/sport">Sport Gloves</NavDropdown.Item>
                <NavDropdown.Item href="/gloves/broken">Broken Fang Gloves</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Rifles" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allrifles">All Rifles</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/rifles/ak47">AK-47</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/aug">AUG</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/awp">AWP</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/famas">FAMAS</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/g3sg1">G3SG1</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/galilar">Galil AR</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/m4a1s">M4A1-S</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/m4a4">M4A4</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/scar20">SCAR-20</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/sg553">SG 553</NavDropdown.Item>
                <NavDropdown.Item href="/rifles/ssg08">SSG 08</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pistols" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allpistols">All Pistols</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pistols/zeus">Zeus x27</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pistols/cz75auto">CZ75-Auto</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/deserteagle">Desert Eagle</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/dualberettas">Dual Berettas</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/fiveseven">Five-SeveN</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/glock18">Glock-18</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/p2000">P2000</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/p250">P250</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/r8revolver">R8 Revolver</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/tec9">Tec-9</NavDropdown.Item>
                <NavDropdown.Item href="/pistols/usps">USP-S</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SMG" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allsmg">All SMG</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mac10">MAC-10</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mp5sd">MP5-SD</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mp7">MP7</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/mp9">MP9</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/ppbizon">PP-Bizon</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/p90">P90</NavDropdown.Item>
                <NavDropdown.Item href="/smgs/ump45">UMP-45</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Heavy" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="/allheavy">All Heavy</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/mag7">MAG-7</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/nova">Nova</NavDropdown.Item>
                <NavDropdown.Item href="/heavy/sawedoff">Sawed-Off</NavDropdown.Item>
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
          <Route exact path="/allknives" element={<Knives/>}/>
          <Route path="/knives/bayonet" element={<Knives category="★ Bayonet |"/>} />
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
          <Route path="/gloves/bloodhound" element={<Gloves category="Bloodhound"/>} />
          <Route path="/gloves/driver" element={<Gloves category="Driver"/>} />
          <Route path="/gloves/handwrap" element={<Gloves category="Hand wraps"/>} />
          <Route path="/gloves/hydra" element={<Gloves category="Hydra"/>} />
          <Route path="/gloves/moto" element={<Gloves category="Moto"/>} />
          <Route path="/gloves/specialist" element={<Gloves category="Specialist"/>} />
          <Route path="/gloves/sport" element={<Gloves category="Sport gloves"/>} />
          <Route path="/gloves/broken" element={<Gloves category="Broken"/>} />

          <Route exact path="/allrifles" element={<Rifles/>}/>
          <Route exact path="/rifles/ak47" element={<Rifles category="AK-47"/>} />
          <Route exact path="/rifles/aug" element={<Rifles category="AUG"/>} />
          <Route exact path="/rifles/awp" element={<Rifles category="AWP"/>} />
          <Route exact path="/rifles/famas" element={<Rifles category="FAMAS"/>} />
          <Route exact path="/rifles/g3sg1" element={<Rifles category="G3SG1"/>} />
          <Route exact path="/rifles/galilar" element={<Rifles category="Galil AR"/>} />
          <Route exact path="/rifles/m4a1s" element={<Rifles category="M4A1-S"/>} />
          <Route exact path="/rifles/m4a4" element={<Rifles category="M4A4"/>} />
          <Route exact path="/rifles/scar20" element={<Rifles category="SCAR-20"/>} />
          <Route exact path="/rifles/sg553" element={<Rifles category="SG 553"/>} />
          <Route exact path="/rifles/ssg08" element={<Rifles category="SSG 08"/>} />

          <Route exact path="/allpistols" element={<Pistols/>}/>
          <Route path="/pistols/zeus" element={<Pistols category="Zeus"/>} />
          <Route path="/pistols/cz75auto" element={<Pistols category="CZ75-Auto"/>} />
          <Route path="/pistols/deserteagle" element={<Pistols category="Desert Eagle"/>} />
          <Route path="/pistols/dualberettas" element={<Pistols category="Dual Berettas"/>} />
          <Route path="/pistols/fiveseven" element={<Pistols category="Five-SeveN"/>} />
          <Route path="/pistols/glock18" element={<Pistols category="Glock-18"/>} />
          <Route path="/pistols/p2000" element={<Pistols category="P2000"/>} />
          <Route path="/pistols/p250" element={<Pistols category="P250"/>} />
          <Route path="/pistols/r8revolver" element={<Pistols category="R8 Revolver"/>} />
          <Route path="/pistols/tec9" element={<Pistols category="Tec-9"/>} />
          <Route path="/pistols/usps" element={<Pistols category="USP-S"/>} />

          <Route exact path="/allsmg" element={<Smg/>}/>
          <Route path="/smgs/mac10" element={<Smg category="MAC-10"/>} />
          <Route path="/smgs/mp5sd" element={<Smg category="MP5-SD"/>} />
          <Route path="/smgs/mp7" element={<Smg category="MP7"/>} />
          <Route path="/smgs/mp9" element={<Smg category="MP9"/>} />
          <Route path="/smgs/ppbizon" element={<Smg category="PP-Bizon"/>} />
          <Route path="/smgs/p90" element={<Smg category="P90"/>} />
          <Route path="/smgs/ump45" element={<Smg category="UMP-45"/>} />

          <Route exact path="/allheavy" element={<Heavy/>}/>
          <Route path="/heavy/mag7" element={<Heavy category="MAG-7"/>} />
          <Route path="/heavy/nova" element={<Heavy category="Nova"/>} />
          <Route path="/heavy/sawedoff" element={<Heavy category="Sawed-Off"/>} />
          <Route path="/heavy/xm1014" element={<Heavy category="XM1014"/>} />
          <Route path="/heavy/m249" element={<Heavy category="M249"/>} />
          <Route path="/heavy/negev" element={<Heavy category="Negev"/>} />
          
          <Route exact path="/agent" element={<Agent/>}/>
          <Route exact path="/container" element={<Container/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default Header;
