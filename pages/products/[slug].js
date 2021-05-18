import React from 'react';
import Head from 'next/head';
import { API_URL, fromImageToUrl } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';
import BuyButton from '../../components/BuyButton';

function Product({ product }) {
  return (
    <div>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description}></meta>
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>
        ${twoDecimals(product.price)} <BuyButton product={product} />
      </p>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const res_product = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await res_product.json();
  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Retrieve all the possible path
  const res_products = await fetch(`${API_URL}/products/`);
  const products = await res_products.json();

  // return them to nextjs context
  const paths = products.map((product) => {
    return {
      params: { slug: String(product.slug) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export default Product;
