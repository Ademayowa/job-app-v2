import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Hero.module.css';

export default function Hero({ title, lead }) {
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col lg={5} className={styles.lg}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Hero.defaultProps = {
  title: 'The easiset way to get your new job.',
  lead: 'We get you the latest job on this platform.',
};
