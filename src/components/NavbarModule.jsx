import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/escudo.png';

export function NavbarModule() {
  return (
    <div>
        <Navbar
        className='fixed-top'
        expand='lg'
        bg='primary'
        data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='Logo Municipal' className='logoNav' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Generar acta</Nav.Link>
              <Nav.Link href='#minutes'>Visualizar Actas</Nav.Link>
              <Nav.Link href='#subir'>Subir Actas al sistema</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
