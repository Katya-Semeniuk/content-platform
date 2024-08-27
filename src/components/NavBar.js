import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar className={styles.Navbar} collapseOnSelect expand="lg" >
    <Container>
<Navbar.Brand ><img src={logo} width="50" alt='Logo'/></Navbar.Brand>

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item >Action</NavDropdown.Item>
      <NavDropdown.Item >Another action</NavDropdown.Item>
      <NavDropdown.Item >Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Nav>
    <Nav.Link >Sign in</Nav.Link>
    <Nav.Link >Sign up</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar;