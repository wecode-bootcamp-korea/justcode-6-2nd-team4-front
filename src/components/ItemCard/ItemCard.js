import React from 'react';
import styles from './ItemCard.module.scss';
import star from '../../assets/images/star.png';
import furniture from '../../assets/images/furniture.png';

function ItemCard() {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_img_box}>
        <img src={furniture}></img>
      </div>
      <div className={styles.card_store_type}>
        <div className={styles.card_store_name}>까사 바이 에이치</div>
        <div className={styles.card_product_type}>소주잔</div>
      </div>
      <div className={styles.card_product_name}>나블리 소주잔세트</div>
      <div className={styles.card_product_price}>40,000</div>
      <div className={styles.card_review}>
        <img src={star}></img>
        <span>0.0(0)</span>
      </div>
    </div>
  );
}

export default ItemCard;
