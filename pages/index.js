import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import products from '../products.json';
import { fromImageToUrl } from '../utils/urls';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product) => {
        return (
          <div className={styles.product} key={product.id}>
            <Link href={`/products/${product.slug}`}>
              <a>
                <div className={styles.product_Row}>
                  <div className={styles.product_ColImg}>
                    <img src={fromImageToUrl(product.image)} alt="img" />
                  </div>
                  <div className={styles.product_Col}>
                    {product.name} ${product.price}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
