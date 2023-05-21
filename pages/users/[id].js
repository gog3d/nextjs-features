import Header from '../header.js';
import { useRouter } from 'next/router';
import Head from 'next/head';

const User = ({user}) => {
  const {query} = useRouter();
  return (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
    <div>
      <Header/>
      <h1>user {query.id}</h1>
      <div>User name - {user.name}</div>
      <div>User email - {user.email}</div>
      <div>User company - {user.company.name}</div>
    </div>
    </>
  );
};

export default User;

export const getServerSideProps = async ({params}) => {
  console.log(params);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json();
    console.log(user);
  return {
    props:{user}
  };
};
