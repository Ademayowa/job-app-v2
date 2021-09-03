import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from './Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='description' />
        <meta name='keywords' content='keywords' />
      </Head>

      <Header />
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Find the latest job in the market',
  description: 'We get you the latest jobs',
};
