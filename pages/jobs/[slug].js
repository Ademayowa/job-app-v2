import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/JobDetails.module.css';

export default function JobPage({ jb }) {
  const { role, company, image, description, requirements, apply, testings } =
    jb;

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
              <p className={styles.location}>Location: Toronto, Canada</p>
            </div>

            <div className='about px-4 pt-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Description</h4>
              <p>{description}</p>
            </div>

            <div className='about px-4 py-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Requirements</h4>
              <p className='mt-4'>{requirements}</p>
            </div>

            <div className='apply px-4 py-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>How to apply</h4>
              <p className='mt-4'>{apply}</p>
            </div>

            <div className='apply px-4 py-4 text-secondary'>
              <h4 className='fs-5 fw-bold text-dark'>Responsibilities</h4>
              {testings.map((duty, index) => {
                return (
                  <ul key={index}>
                    <li>{duty}</li>
                  </ul>
                );
              })}
            </div>
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
