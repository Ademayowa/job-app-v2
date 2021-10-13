import { parseCookie } from '@/helpers/index';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function DashboardPage({ jobs }) {
  console.log(jobs);

  return (
    <Layout title='User Dashboard'>
      <h1>Dashboard</h1>
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
