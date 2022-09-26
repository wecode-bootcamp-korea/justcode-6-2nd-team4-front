import React from 'react';
import styled from 'styled-components';
import styles from './CartList.module.scss';
import x from '../../assets/images/x.png';
import teddy from '../../assets/images/teddy-bear.png';

function CartList({ cartData }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.check_name_box}>
          <div className={styles.checkbox_box}>
            <input type="checkbox"></input>
          </div>
          <div className={styles.shop}>{cartData.shop}</div>
        </div>
        <div className={styles.delete}>
          <img src={x} className={styles.delete_icon}></img>
        </div>
      </div>
      <div className={styles.img_name_box}>
        <div className={styles.img_box}>
          <img src={cartData.image}></img>
        </div>
        <div className={styles.name_period_box}>
          <div className={styles.name}>{cartData.name}</div>
          <div className={styles.period}>{cartData.period}</div>
        </div>
      </div>
      <div className={styles.option_amount_box}>
        <div className={styles.option}>{cartData.options}</div>
        <div className={styles.amount_price_box}>
          <div className={styles.amount_box}>
            <div className={styles.amount_minus}>-</div>
            <div className={styles.amount_status}>{cartData.quantity}</div>
            <div className={styles.amount_plus}>+</div>
          </div>
          <div className={styles.price_container}>
            <div className={styles.price}>작품가격 {cartData.price}원</div>
            <div className={styles.plus}> + </div>
            <div className={styles.delivery_fee}>
              {cartData.delivery_fee !== null
                ? `배송비 ${cartData.delivery_fee}`
                : '배송비무료'}
            </div>
            <div className={styles.total_price}> 총 {cartData.price}원</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartList;
