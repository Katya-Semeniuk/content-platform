import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar className={styles.Navbar} collapseOnSelect expand="lg" >
    <Container>
        <NavLink to="/">
        <Navbar.Brand ><img src={logo} width="50" alt='Logo'/></Navbar.Brand>
        </NavLink>


<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <NavLink to="/">Features</NavLink>
    <NavLink to="/">Pricing</NavLink>
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item >Action</NavDropdown.Item>
      <NavDropdown.Item >Another action</NavDropdown.Item>
      <NavDropdown.Item >Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Nav>
    <NavLink to="/signin" className={styles.SignInBtn} >Sign in</NavLink>
    <NavLink to="/signup" className={styles.SignUpBtn} activeClassName={styles.Active} >Sign up</NavLink>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar;