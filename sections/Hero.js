import {
  Container,
  Row,
  Col,
  Form,
  Label,
  FormControl,
  InputGroup,
  Text,
} from 'react-bootstrap';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import styles from '@/styles/Hero.module.css';

export default function Hero({ title, lead }) {
  return (
    <section className={styles.hero}>
      <Container className='px-4'>
        <Row>
          <Col lg={5} className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className='ps-0'>
            <InputGroup className='mb-3 bg-white p-4 shadow-lg rounded-2'>
              <InputGroup.Text className={styles.text}>
                <BiSearch className={styles.search} />
              </InputGroup.Text>
              <FormControl
                className={styles.control}
                placeholder='Search by title or location'
              />
              <button
                className='btn btn-danger ms-3 px-3 '
                type='button'
                id='button-addon1'
              >
                <BiSearch className={styles.color} />
              </button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <div className={styles.image}>
        <Image
          className='d-none d-lg-block'
          src={'/images/hero.png'}
          width={600}
          height={600}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
}

Hero.defaultProps = {
  title: 'The easiset way to get your new job.',
  lead: 'We get you the latest job on this platform.',
};
