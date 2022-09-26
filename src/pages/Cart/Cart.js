import React, { useEffect, useState } from 'react';
import CartList from '../../components/Cart/CartList';
import CartPayment from '../../components/Cart/CartPayment';
import styles from './Cart.module.scss';

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('/mocks/Cart/CartList.json')
      .then(res => res.json())
      .then(data => setCartData(data.cart));
  }, []);
  console.log(cartData);

  return (
    <div>
      <div>장바구니</div>
      <div className={styles.cart_list_payment_wrapper}>
        <div>
          {cartData.map((cartData, i) => {
            return <CartList key={i} cartData={cartData} id={i} />;
          })}
        </div>

        <CartPayment />
      </div>
    </div>
  );
}
export default Cart;
