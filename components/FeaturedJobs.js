import { Col, Card, Body, Title, Text, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Featured.module.css';

export default function FeaturedJobs({ job }) {
  const { type, role, location, company, image, jobtype } = job;

  return (
    <Col lg={4}>
      <Card className='py-2 px-2 mt-5 mb-lg-5'>
        <div className={styles.image}>
          <Image src={image.url} width={50} height={50} objectFit={'contain'} />
        </div>

        <Card.Body>
          <Card.Title className={styles.title}>
            {type} &#183; {jobtype}
          </Card.Title>
          <Card.Text className={styles.text}>{role}</Card.Text>
          <h4 className='fs-6 text-secondary'>{company}</h4>
          <h5 className='fs-6 text-secondary'>{location}</h5>
          <Link href={`/jobs/${job.slug}`}>
            <a className='btn btn-primary mt-2'>Apply</a>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
