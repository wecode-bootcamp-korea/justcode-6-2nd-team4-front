import React from 'react';
import styles from './ItemCard.module.scss';
import star from '../../assets/images/star.png';
import furniture from '../../assets/images/furniture.png';

function ItemCard({ data }) {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_img_box}>
        <img src={furniture}></img>
      </div>
      <div className={styles.card_store_type}>
        <div className={styles.card_store_name}>{data.shop}</div>
        <div className={styles.card_product_type}>{data.category}</div>
      </div>
      <div className={styles.card_product_name}>{data.product_name}</div>
      <div className={styles.card_product_price}>{data.price}</div>
      <div className={styles.card_review}>
        <img src={star}></img>
        <span>
          {data.average}
          {data.review_count}
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
