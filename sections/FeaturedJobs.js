import {
  Container,
  Row,
  Col,
  Card,
  Body,
  Title,
  Text,
  Button,
} from 'react-bootstrap';
import Image from 'next/image';
import styles from '@/styles/Featured.module.css';

export default function FeaturedJobs() {
  return (
    <section className={styles.featured}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className='fs-6 fw-bold text-danger text-center'>
              Featured Jobs
            </h2>
            <h3 className='fs-2 fw-bold text-primary text-center text-primary'>
              Something special in the job
            </h3>
          </Col>

          <Col lg={4}>
            <Card className='px-2 py-2 mt-5'>
              <div className={styles.image}>
                <Image
                  className='d-none d-lg-block'
                  src={'/images/logo.png'}
                  width={60}
                  height={60}
                  objectFit={'contain'}
                />
              </div>
              <Card.Body>
                <Card.Title className={styles.title}>
                  5h ago . Full Time
                </Card.Title>
                <Card.Text className={styles.text}>
                  Senior Software Engineer
                </Card.Text>
                <h5 className='fs-6 text-secondary'>So Digital Inc.</h5>
                <Button variant='danger' className={styles.danger}>
                  Apply
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
