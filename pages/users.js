import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './header.js';
import Head from 'next/head';

const Users = ({users}) => {

  return (
  <>
    <Head>
      <title>Users</title>
    </Head>
    <div>
      <Header />
      <h1>Users</h1>
      <ul>
        {users.map(user =>
          <li>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  </>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();
  return { props: { users } };
};
