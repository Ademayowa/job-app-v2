import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Image from 'next/image';
import JobDetails from '@/components/JobDetails';

export default function JobPage({ jb }) {
  const { role, company, image } = jb;

  return (
    <Layout>
      <div className='p-4 mx-5'>
        <div className='wrapper bg-white d-flex mt-4 p-5 shadow-sm border'>
          {jb.image && (
            <div className='logo'>
              <Image
                src={image.url}
                width={40}
                height={40}
                objectFit={'contain'}
              />
            </div>
          )}

          <div className='company ms-5'>
            <h3>{company}</h3>
          </div>

          <div className='site ms-auto px-3'>
            <Link href='#'>
              <a className='btn btn-danger'>Company site</a>
            </Link>
          </div>
        </div>

        <JobDetails />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
  const jobs = await res.json();

  return {
    props: {
      jb: jobs[0],
    },
  };
}
