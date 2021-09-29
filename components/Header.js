import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import styles from '@/styles/Header.module.css';
import Search from './search';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand='md' className='shadow-sm bg-white'>
      <Container className={styles.container}>
        <Navbar.Brand href='/' className={styles.home}>
          Find Jobs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>

          <Search />

          <Nav className={styles.link}>
            <Nav.Link href='#deets'>Home</Nav.Link>
            {/* <Nav.Link href='#deets'>Jobs</Nav.Link>
            <Nav.Link href='#deets'>Blog</Nav.Link>
            <Nav.Link href='#deets'>Login</Nav.Link> */}

            <Button variant='danger' className={styles.danger}>
              Post Job
            </Button>

            {user ? (
              // If logged in
              <>
                <Nav.Link href='/jobs/add'>Add Job</Nav.Link>

                <Nav.Link href='/account/dashboard'>Dashboard</Nav.Link>

                <Nav.Link onClick={() => logout()}>
                  <a className='btn btn-danger'>
                    <FaSignOutAlt /> Logout
                  </a>
                </Nav.Link>
              </>
            ) : (
              // If not logged out
              <>
                <Nav.Link href='/account/login'>
                  <a className='btn btn-dark'>
                    <FaSignInAlt /> Login
                  </a>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
