import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from '@/styles/Header.module.css';
import Search from './search';

export default function Header() {
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
            <Nav.Link href='#deets'>Jobs</Nav.Link>
            <Nav.Link href='#deets'>Blog</Nav.Link>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Button variant='danger' className={styles.danger}>
              Post Job
            </Button>

            <Nav.Link href='/jobs/add'>Add Job</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
