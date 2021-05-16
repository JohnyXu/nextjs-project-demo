import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import AuthContext from '../context/AuthContext';

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const { user } = useContext(AuthContext);
  console.log('user:', user);
  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <header className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {'< '}Back
          </a>
        </div>
      )}
      <div>
        <Link href="/">
          <a>
            <h1>The E-commerce</h1>
          </a>
        </Link>
      </div>
      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a>
              <img src="/user_avatar.png" alt={user.email} />
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
    </header>
  );
}
