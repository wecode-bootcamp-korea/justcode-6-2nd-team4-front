import React from 'react';
import styles from './CartPayment.module.scss';

function CartPayment() {
  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_box}>
        <div className={styles.total_box}>
          <div className={styles.total_title}>총 상품금액</div>
          <div className={styles.total_price}>0원</div>
        </div>
        <div>
          <div>총 배송비</div>
          <div> +0원</div>
        </div>
        <div>
          <div>결제금액</div>
          <div>0원</div>
        </div>
      </div>
      <div>구매하기</div>
    </div>
  );
}
export default CartPayment;
