import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import styles from '@/styles/AddPage.module.css';

export default function AddJobPage() {
  const [values, setValues] = useState({
    company: '',
    location: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
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
