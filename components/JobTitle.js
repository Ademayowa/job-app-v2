import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/Jobtitle.module.css';

export default function JobTitle() {
  return (
    <section className='bg-dark'>
      <Container className={styles.contain}>
        <div className='bg-white p-4 mb-5'>
          <div className={styles.cover}>
            <Image
              src={'/images/logo.png'}
              width={50}
              height={50}
              objectFit={'contain'}
            />
            <div>
              <Button variant='danger' className='mt-3'>
                Company site
              </Button>
            </div>
          </div>

          <div className={styles.test}>
            <p className='fs-5 fw-bold'>So digital Inc.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
