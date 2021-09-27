import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaImage } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';
import styles from '@/styles/AddPage.module.css';

export default function EditJobPage({ jb }) {
  const [values, setValues] = useState({
    company: jb.company,
    location: jb.location,
    date: jb.date,
    time: jb.time,
    description: jb.description,
  });

  const [imagePreview, setImagePreview] = useState(
    jb.image ? jb.image.url : null
  );

  // Modal
  const [showModal, setShowModal] = useState(false);

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

    // Make request to backend if all fields are filled
    const res = await fetch(`${API_URL}/jobs/${jb.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const jb = await res.json();
      router.push(`/jobs/${jb.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    // get the lastest image preview
    const res = await fetch(`${API_URL}/jobs/${jb.id}`);
    const data = await res.json();
    setImagePreview(data.image.url);
    setShowModal(false);
  };

  return (
    <Layout title='Edit Job'>
      <div className='container'>
        <Link href='/jobs'>Go Back</Link>
        <h2 className='mt-4'>Edit Jobs</h2>
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
              value={moment(values.date).format('yyy-MM-DD')}
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

          <input type='submit' value='Update Job' className='btn btn-danger' />
        </form>

        <h2>Job Image</h2>
        {imagePreview ? (
          <Image src={imagePreview} height={60} width={60} />
        ) : (
          <div>
            <p>No Image uploaded</p>
          </div>
        )}

        <div>
          <button
            onClick={() => setShowModal(true)}
            className='btn btn-danger btn-lg mt-4 mb-4'
          >
            <FaImage /> Set Image
          </button>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload jbId={jb.id} imageUploaded={imageUploaded} />
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/jobs/${id}`);
  const jb = await res.json();

  return {
    props: { jb },
  };
}
