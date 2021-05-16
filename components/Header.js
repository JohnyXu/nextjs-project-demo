import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

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
    </header>
  );
}
