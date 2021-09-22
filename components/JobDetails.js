import Link from 'next/link';
import styles from '@/styles/JobDetails.module.css';

export default function JobDetails() {
  return (
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            autem ipsam, beatae molestias quidem mollitia, incidunt
            reprehenderit similique, laboriosam ducimus tempore rerum repellat
            obcaecati quo quibusdam hic! Iure quas sed reiciendis minus ipsa
            natus, rerum nisi. Enim harum deleniti eius molestias fugit
            asperiores totam dicta similique a nulla sunt quam natus eum ipsum
            blanditiis reiciendis mollitia, praesentium non. Aliquam repellat
            fuga accusantium consequuntur perspiciatis laudantium voluptas
            impedit dolorem laborum quo! blanditiis reiciendis mollitia,
            praesentium non. Aliquam repellat fuga accusantium consequuntur
          </p>
        </div>

        <div className='about px-4 py-4 text-secondary'>
          <h4 className='fs-5 fw-bold text-dark'>Requirements</h4>
          <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            autem ipsam, beatae molestias quidem mollitia, incidunt
            reprehenderit similique, laboriosam ducimus tempore rerum repellat
            obcaecati quo quibusdam hic beatae molestias quidem mollitia,
            incidunt reprehenderit similique, laboriosam ducimus tempore rerum
            repellat obcaecati quo quibusdam hic beatae molestias quidem
            mollitia, incidunt reprehenderit similique, laboriosam ducimus
            tempore rerum repellat reprehenderit similique.
          </p>

          <p>
            * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis qui repellendus soluta eveniet hic quidem temporibus
            maiores consequuntur.
          </p>
        </div>

        <div className='apply px-4 py-4 text-secondary'>
          <h4 className='fs-5 fw-bold text-dark'>How to apply</h4>
          <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            autem ipsam, beatae molestias quidem mollitia, incidunt
            reprehenderit similique, laboriosam ducimus tempore rerum repellat
            obcaecati quo quibusdam hic beatae molestias quidem mollitia,
            incidunt reprehenderit similique, laboriosam ducimus tempore rerum
            repellat obcaecati quo quibusdam hic beatae molestias quidem
            mollitia, incidunt reprehenderit similique, laboriosam ducimus
            tempore rerum repellat reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
}
