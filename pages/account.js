import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { API_URL } from '../utils/urls';

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          setLoading(true);
          const token = await getToken();
          const res_order = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const orders = await res_order.json();
          setOrders(orders);
        } catch (err) {
          setOrders([]);
        }
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  return { orders, loading };
};

export default function Account() {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  const { orders, loading } = useOrders(user, getToken);

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

      <h3>Your Orders</h3>
      {loading && <p>Loading your orders</p>}
      {orders.map((order) => {
        return (
          <div key={order.id}>
            {new Date(order.created_at).toLocaleDateString('en-En')} {order.product.name} $
            {order.total} {order.status}
          </div>
        );
      })}
      <hr />
      <p>Logged in as: {user.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}
