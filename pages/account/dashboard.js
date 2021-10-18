import { parseCookie } from '@/helpers/index';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import DashboardJob from '@/components/DashboardJob';

export default function DashboardPage({ jobs, token }) {
  const router = useRouter();

  const deleteJob = async (id) => {
    if (confirm('Are you sure you want to delete')) {
      const res = await fetch(`${API_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push(`/jobs`);
      }
    }
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
      token,
    },
  };
}
