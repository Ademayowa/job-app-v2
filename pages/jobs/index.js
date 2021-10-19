import Job from '@/components/Job';
import Layout from '@/components/Layout';
import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from 'sections/Hero';
import Info from 'sections/Info';
import { API_URL, PER_PAGE } from '@/config/index';
import { Container, Row } from 'react-bootstrap';

import styles from '@/styles/Featured.module.css';
import Pagination from '@/components/Pagination';

export default function JobsPage({ jobs, page, total }) {
  return (
    <Layout title='Jobs Page'>
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

        <Pagination page={page} total={total} />
      </Container>

      <Info />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // console.log(page);

  // Calculate start page for pagination
  // +page converts d page 2 number
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fecth total number of pages from DB
  const totalRes = await fetch(`${API_URL}/jobs/count`);
  const total = await totalRes.json();

  const jobRes = await fetch(
    `${API_URL}/jobs?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const jobs = await jobRes.json();

  // console.log(jobs);

  return {
    // total is d number of pages in DB
    props: { jobs, page: +page, total },
  };
}
