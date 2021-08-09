import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/Info.module.css';

export default function Info() {
  return (
    <section className={styles.info}>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className='fs-6 fw-bold text-danger'>Get New Job</h2>
            <h3 className='mt-3 fs-2 fw-bold text-primary'>
              Millions of Jobs avilable. <br /> Find the right one for yourself
            </h3>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, voluptatem qui similique fugit, nam consequatur ut
              mollitia doloribus officia excepturi voluptas. Reprehenderit,
              voluptatem qui similique fugit, nam consequatur ut mollitia
              doloribus officia excepturi voluptas.
            </p>
            <Button variant='danger' className={styles.danger}>
              Post Job
            </Button>
          </Col>

          <Col lg={6}>
            <Image
              className='d-none d-lg-block'
              src={'/images/section-2.png'}
              width={400}
              height={400}
              objectFit={'contain'}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
