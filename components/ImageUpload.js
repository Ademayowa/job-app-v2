import { useState } from 'react';
import { API_URL } from '@/config/index.js';
import styles from '@/styles/Form.module.css';

export default function ImageUpload({ jbId, imageUploaded }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // connect form to jobs from strapi
    formData.append('files', image);
    formData.append('ref', 'jobs');
    formData.append('refId', jbId);
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.form}>
      <h1>UPLOAD JOB IMAGE</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type='file' onChange={handleFileChange} />
        </div>

        <input type='submit' value='Upload' className='btn btn-danger' />
      </form>
    </div>
  );
}
