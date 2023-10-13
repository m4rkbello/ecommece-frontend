import React from 'react';
import { Link } from 'react-router-dom'; //import ug link para sa router para e redirect sya
import {Navbar, Nav, Container} from 'react-bootstrap'; //import navbar para sa header


function Header(){
    return(
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/add">Add Products</Link>
            <Link to="/update">Update Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header;