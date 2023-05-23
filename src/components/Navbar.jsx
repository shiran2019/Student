import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pr from '../images/pr.jpg'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="xl" style={{backgroundColor:"#5b5ea6" }}  variant="dark">
      <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/" style={{fontSize:"20px"}} >Home</Nav.Link>
            <Nav.Link href="/art-gallery" style={{fontSize:"20px"}}>Art gallery</Nav.Link>
            <Nav.Link href="/talent-page" style={{fontSize:"20px"}}>Talents</Nav.Link>
            <Nav.Link href="/today" style={{fontSize:"20px"}} >Today</Nav.Link>
            <Nav.Link href="/term-evaluations" style={{fontSize:"20px"}}>Term evaluations</Nav.Link>
            <Nav.Link href="/appointments" style={{fontSize:"20px"}}>Appointments</Nav.Link>

            <NavDropdown style={{fontSize:"20px"}} title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/news" >News</NavDropdown.Item>
              <NavDropdown.Item href="our-teachers">Our teachers</NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <table>
           <Nav>
            <tr>
                <td>
                <Nav.Link href="#deets"><img src={pr} style={{ borderRadius: '50%' ,width: '35px', height: '35px'}} ></img></Nav.Link>
               </td>
                <td>
                <NavDropdown title="Savindu Harith" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/news" >Profile</NavDropdown.Item>
                <NavDropdown.Item href="our-teachers">Payments</NavDropdown.Item>
                <NavDropdown.Item href="contact">Logout</NavDropdown.Item>
                </NavDropdown>
                </td>
            </tr>
          </Nav>
          </table>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;