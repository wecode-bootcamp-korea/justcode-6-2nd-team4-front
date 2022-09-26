import React, { useEffect, useState } from 'react';
import CartList from '../../components/Cart/CartList';
import CartPayment from '../../components/Cart/CartPayment';
import styles from './Cart.module.scss';

function Cart() {
  const [cartData, setCartData] = useState([]);

  //user 장바구니 데이터 불러오기
  useEffect(() => {
    fetch('/mocks/Cart/CartList.json')
      .then(res => res.json())
      .then(data => setCartData(data.cart));
  }, []);
  console.log(cartData);

  //장바구니 수량 및 가격 변경
  const increaseProductPriceAndAmount = e => {
    let copy = [...cartData];
    console.log(e.target.id);
    copy[e.target.id].quantity = copy[e.target.id].quantity + 1;
    copy[e.target.id].price =
      copy[e.target.id].quantity * copy[e.target.id].product_price +
      copy[e.target.id].delivery_fee;
    return setCartData(copy);
  };

  const decreaseProductPriceAndAmount = e => {
    let copy = [...cartData];
    copy[e.target.id].quantity = copy[e.target.id].quantity - 1;
    copy[e.target.id].price =
      copy[e.target.id].quantity * copy[e.target.id].product_price +
      copy[e.target.id].delivery_fee;
    return setCartData(copy);
  };

  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_title}>장바구니</div>
      <div className={styles.cart_list_payment_wrapper}>
        <div className={styles.cart_list_wrapper}>
          {cartData.map((cartData, i) => {
            return (
              <CartList
                key={i}
                cartData={cartData}
                id={i}
                increaseProductPriceAndAmount={increaseProductPriceAndAmount}
                decreaseProductPriceAndAmount={decreaseProductPriceAndAmount}
              />
            );
          })}
        </div>

        <CartPayment />
      </div>
    </div>
  );
}
export default Cart;
