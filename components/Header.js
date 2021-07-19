import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
      <Container className={styles.container}>
        <Navbar.Brand href='#home' className={styles.home}>
          Find Jobs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>

          <Nav className={styles.link}>
            <Nav.Link href='#deets'>Home</Nav.Link>
            <Nav.Link href='#deets'>Jobs</Nav.Link>
            <Nav.Link href='#deets'>Blog</Nav.Link>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Button variant='danger' className={styles.danger}>
              Post Job
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
