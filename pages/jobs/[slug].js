import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styles from '@/styles/JobDetails.module.css';

export default function JobPage({ jb }) {
  const router = useRouter();

  const { location, company, image, description, testings } = jb;

  const deleteJob = async (e) => {
    if (confirm('Are you sure you want to delete')) {
      const res = await fetch(`${API_URL}/jobs/${jb.id}`, {
        method: 'DELETE',
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
    <Layout>
      <div className='p-4 mx-5'>
        <div className='controls'>
          <Link href={`/jobs/edit/${jb.id}`}>
            <a className='me-3'>
              <FaPencilAlt /> Edit Job
            </a>
          </Link>

          <a href='#' onClick={deleteJob}>
            <FaTimes /> Delete Job
          </a>
        </div>

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
            <ToastContainer />
          </div>

          <div className='site ms-auto px-3'>
            <Link href='#'>
              <a className='btn btn-danger'>Company site</a>
            </Link>
          </div>
        </div>

        <div className='wrapper mt-5'>
          <div className={styles.background}>
            <div className='headings px-4 py-4'>
              <span className='text-secondary'>1w ago . Part Time</span>
              <h4 className='fs-5 fw-bold mt-2'>Front end Developer</h4>

              <div className={styles.apply}>
                <Link href='#'>
                  <a className='btn btn-danger'>Apply Now</a>
                </Link>
              </div>
              <p className={styles.location}>Location: {location}</p>
            </div>

            <div className='about px-4 pt-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Description</h4>
              <p>{description}</p>
            </div>

            <div className='about px-4 py-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Company</h4>
              <p className='mt-4'>{company}</p>
            </div>

            {/* <div className='apply px-4 py-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Responsibilities</h4>
              {testings.map((duty, index) => {
                return (
                  <ul key={index}>
                    <li>{duty}</li>
                  </ul>
                );
              })}
            </div> */}
          </div>
        </div>
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
