import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import styles from '@/styles/DashboardJob.module.css';

export default function DashboardJob({ jb, handleDelete }) {
  // const handleDelete = () => {
  //   console.log('delete');
  // };

  return (
    <div className={styles.job}>
      <h4>
        <Link href={`/jobs/${jb.slug}`}>
          <a>{jb.company}</a>
        </Link>
      </h4>

      <Link href={`/jobs/edit/${jb.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Job</span>
        </a>
      </Link>

      <a onClick={() => handleDelete(jb.id)} href='#' className={styles.delete}>
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
}
