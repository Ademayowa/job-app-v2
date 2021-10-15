import { parseCookie } from '@/helpers/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import styles from '@/styles/AddPage.module.css';

export default function AddJobPage({ token }) {
  const [values, setValues] = useState({
    company: '',
    location: '',
    date: '',
    time: '',
    description: '',
    testings: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: checks if fields are empty or not
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    // Make reuqest to backend if all fields are filled
    const res = await fetch(`${API_URL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      // Checks if user has token
      if (res.status === 403 || res.status === 401) {
        toast.error('No token is included');
        return;
      }

      toast.error('Something Went Wrong');
    } else {
      const jb = await res.json();
      router.push(`/jobs/${jb.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title='Add New Job'>
      <div className='container'>
        <Link href='/jobs'>Go Back</Link>
        <h2 className='mt-4'>Add Jobs</h2>
        <ToastContainer />

        <form onSubmit={handleSubmit} className='row g-3 mt-5 mb-5'>
          <div className='col-md-6'>
            <label htmlFor='company' className='form-label'>
              Company
            </label>
            <input
              type='text'
              className='form-control'
              id='company'
              name='company'
              value={values.company}
              onChange={handleInputChange}
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input
              type='date'
              className='form-control'
              id='date'
              name='date'
              value={values.date}
              onChange={handleInputChange}
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='time' className='form-label'>
              Time
            </label>
            <input
              type='text'
              className='form-control'
              id='time'
              name='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='location' className='form-label'>
              Location
            </label>
            <input
              type='text'
              className='form-control'
              id='location'
              name='location'
              value={values.location}
              onChange={handleInputChange}
            />
          </div>

          {/* <div className='col-md-6'>
            <label htmlFor='location' className='form-label'>
              Testings
            </label>
            <input
              type='text'
              className='form-control'
              id='testings'
              name='testings'
              value={values.testings}
              onChange={handleInputChange}
            />
          </div> */}

          <div className='form-floating'>
            <textarea
              className='form-control'
              placeholder='Leave a comment here'
              id='description'
              name='description'
              value={values.description}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor='floatingTextarea2'>Description</label>
          </div>

          <input type='submit' value='Add Job' className='btn btn-danger' />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  return {
    props: {
      token,
    },
  };
}
