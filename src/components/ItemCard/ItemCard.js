import React from 'react';
import styles from './ItemCard.module.scss';
import star from '../../assets/images/star.png';
import furniture from '../../assets/images/furniture.png';

function ItemCard({ data }) {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_img_box}>
        <img src={data.image}></img>
      </div>
      <div className={styles.card_store_type}>
        <div className={styles.card_store_name}>{data.shop}</div>
        <div className={styles.card_product_type}>{data.category}</div>
      </div>
      <div className={styles.card_product_name}>{data.product_name}</div>
      <div className={styles.card_product_price}>{data.price}</div>
      <div className={styles.review_delivery_container}>
        {data.average !== 0 ? (
          <div className={styles.card_review}>
            <img src={star}></img>
            <span>{data.average !== null ? data.average : '0.0'}</span>
            <span>
              ({data.review_count !== null ? data.review_count : '0'})
            </span>
          </div>
        ) : null}
        {data.delivery_type == null ? (
          <div className={styles.delivery_type}>무료배송</div>
        ) : null}
      </div>
    </div>
  );
}

export default ItemCard;
