import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './style.module.css';

const TopNavbar = () => (
  <>
    <Navbar
      className={styles.header}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className={styles.brand} href="/">
          <img
            className={styles.nittLogo}
            src="https://www.nitt.edu/home/nitt.png"
            alt="NIT Trichy Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`${styles.xsTopNavElems} me-auto`}>
            <Nav.Link className={styles.colorWhite} href="/conference">
              CONFERENCE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/authandlist">
              FOR AUTHORS AND LISTENERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/revsandorgs">
              FOR REVIWERS AND SESSION ORGANIZERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/pastconference">
              PAST CONFERENCES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar className={styles.navbar} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Collapse
          className={styles.NavElements}
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link className={styles.colorWhite} href="/conference">
              CONFERENCE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/authandlist">
              FOR AUTHORS AND LISTENERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/revsandorgs">
              FOR REVIWERS AND SESSION ORGANIZERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} href="/pastconference">
              PAST CONFERENCES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default TopNavbar;
