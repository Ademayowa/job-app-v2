import { Col, Card, Body, Title, Text, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Featured.module.css';

export default function FeaturedJobs({ job }) {
  const { time, role, location } = job;

  return (
    <Col lg={4}>
      <Card className='py-2 mt-5 mb-lg-5'>
        <div className={styles.image}>
          <Image
            src={'/images/logo.png'}
            width={60}
            height={60}
            objectFit={'contain'}
          />
        </div>

        <Card.Body>
          <Card.Title className={styles.title}>{time}</Card.Title>
          <Card.Text className={styles.text}>{role}</Card.Text>
          <h5 className='fs-6 text-secondary'>{location}.</h5>
          <Link href={`/jobs/${job.slug}`}>
            <a className='btn btn-danger mt-2'>Apply</a>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
