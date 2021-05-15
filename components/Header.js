import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <h1>E-commerce with NextJS, Magic, Strapi and Stripe</h1>
          </a>
        </Link>
      </div>
    </header>
  );
}
