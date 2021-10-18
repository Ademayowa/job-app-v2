import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';
import Job from '@/components/Job';
import Layout from '@/components/Layout';
// import Search from '@/components/search/Search';
import FeaturedJobs from '@/components/FeaturedJobs';
import Info from 'sections/Info';
import { API_URL } from '@/config/index';
import { Container, Row } from 'react-bootstrap';
import styles from '@/styles/Featured.module.css';

export default function SearchPage({ jobs }) {
  const router = useRouter();

  return (
    <Layout title='Search Results'>
      <Link href='/jobs'>Go Back</Link>
      <h2 className='text-center mt-4 fs-4 fw-bold'>
        Search Results for {router.query.term}
      </h2>
      {jobs.length === 0 && (
        <h3 className='text-center mt-5 mb-5'>
          There are no jobs available at the moment
        </h3>
      )}

      <Container className={styles.featured}>
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

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { company_contains: term },
        { role_contains: term },
        { type_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/jobs?${query}`);
  const jobs = await res.json();

  // console.log(jobs);

  return {
    props: { jobs },
  };
}
