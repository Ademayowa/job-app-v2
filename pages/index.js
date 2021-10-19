import Job from '@/components/Job';
import Layout from '@/components/Layout';
// import Search from '@/components/search/Search';
import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from 'sections/Hero';
import Info from 'sections/Info';
import { API_URL } from '@/config/index';
import { Container, Row } from 'react-bootstrap';
import styles from '@/styles/Featured.module.css';

export default function HomePage({ jobs }) {
  return (
    <Layout>
      {/* <Hero /> */}

      {jobs.length === 0 && (
        <h3 className='text-center mt-5 mb-5'>
          There are no jobs available at the moment
        </h3>
      )}

      <Container className={styles.featured}>
        {/* Convert this to component later */}
        <h2 className='fs-6 fw-bold text-danger text-center'>Featured Jobs</h2>
        <h3 className='fs-2 fw-bold text-primary text-center text-primary mb-lg-5'>
          Something special in the job
        </h3>

        <Row className={styles.margin}>
          {jobs.map((job) => (
            <FeaturedJobs key={job.id} job={job} />
          ))}
        </Row>
      </Container>

      <Info />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/jobs`);
  const jobs = await res.json();

  // console.log(jobs);

  return {
    props: { jobs },
  };
}
