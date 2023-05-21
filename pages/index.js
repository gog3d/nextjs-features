import Link from 'next/link';
import Head from 'next/head';
import styles from './styles.module.css';
import Header from './header.js';

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="cups"></meta>
        <title>Index</title>
      </Head>
      <div>
        <Header/>
        <h1>Index</h1>
      </div>
    </>
  );
};

export default Index;
