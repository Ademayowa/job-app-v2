import { parseCookie } from '@/helpers/index';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import DashboardJob from '@/components/DashboardJob';

export default function DashboardPage({ jobs }) {
  // console.log(jobs);

  // const deleteJob = (id) => {
  //   console.log(id);
  // };

  const deleteJob = (id) => {
    console.log(id);
  };

  return (
    <Layout title='User Dashboard'>
      <div className='container'>
        <div className={styles.dash}>
          <h1 className='mt-4'>Dashboard</h1>
          <h3 className='mt-2 mb-5'>My Jobs</h3>

          {jobs.map((jb) => (
            <DashboardJob key={jb.id} jb={jb} handleDelete={deleteJob} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  const res = await fetch(`${API_URL}/jobs/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
}
