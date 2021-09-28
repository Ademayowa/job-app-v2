import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

export default function Pagination({ page, total }) {
  // Calculate last page of d pagination
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {/* pagination links */}
      <div className='d-flex'>
        {page > 1 && (
          <div className='col-2 mt-3 ms-3'>
            <Link href={`/jobs?page=${page - 1}`}>
              <a className='btn btn-danger'>Prev</a>
            </Link>
          </div>
        )}

        {page < lastPage && (
          <div className='col-2 mt-3 ms-3'>
            <Link href={`/jobs?page=${page + 1}`}>
              <a className='btn btn-danger'>Next</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
