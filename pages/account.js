import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Account() {
  const { user, logoutUser } = useContext(AuthContext);
  if (!user) {
    return (
      <div>
        <p>Please login or register</p>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Account Page</title>
        <meta name="description" content="The account page, view your orders and login email" />
      </Head>
      <h2>Account page</h2>
      <p>Logged in as: {user.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}
