import React from 'react';
import styles from './CartPayment.module.scss';

function CartPayment({ cartData }) {
  const price = cartData.map(el => {
    return el.quantity * el.product_price;
  });

  const deliveryFee = cartData.map((el, i) => {
    return el.delivery_fee;
  });

  const totalPrice = price.reduce((a, b) => a + b, 0);
  const totalDeliveryFee = deliveryFee.reduce((a, b) => a + b, 0);
  const totalPayment = totalPrice + totalDeliveryFee;

  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_box}>
        <div className={styles.total_box}>
          <div className={styles.total_title}>총 상품금액</div>
          <div className={styles.total_price}>{totalPrice}원</div>
        </div>
        <div className={styles.delivery_fee_box}>
          <div className={styles.delivery_fee}>총 배송비</div>
          <div className={styles.total_delivery}> +{totalDeliveryFee}원</div>
        </div>
        <div className={styles.total_payment_box}>
          <div className={styles.payment_title}>결제금액</div>
          <div className={styles.total_payment_amount}>{totalPayment}원</div>
        </div>
      </div>

      <div className={styles.buy_btn}>구매하기</div>
    </div>
  );
}
export default CartPayment;
