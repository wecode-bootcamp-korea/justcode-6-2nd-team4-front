import React from 'react';
import styles from './CartList.module.scss';
import x from '../../assets/images/x.png';

function CartList({
  cartData,
  id,
  increaseProductPriceAndAmount,
  decreaseProductPriceAndAmount,
  deleteCartList,
  patchAmountChange,
  deleteCartListData,
}) {
  const activeMinusBtn = () => {
    if (cartData.quantity > 1) {
      return true;
    }
  };

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
          <img
            src={x}
            alt="delete button"
            className={styles.delete_icon}
            id={id}
            onClick={e => {
              deleteCartList(e);
              deleteCartListData(e);
            }}
          ></img>
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
            <div
              className={styles.amount_minus}
              id={id}
              onClick={e => {
                decreaseProductPriceAndAmount(e);
                patchAmountChange(e);
              }}
              disabled={!activeMinusBtn}
            >
              -
            </div>
            <div className={styles.amount_status}>{cartData.quantity}</div>
            <div
              className={styles.amount_plus}
              id={id}
              onClick={e => {
                increaseProductPriceAndAmount(e);
                patchAmountChange(e);
              }}
            >
              +
            </div>
          </div>
          <div className={styles.price_container}>
            <div className={styles.price}>
              작품가격 {cartData.price.toLocaleString()}원
            </div>
            <div className={styles.plus}> + </div>
            <div className={styles.delivery_fee}>
              {cartData.delivery_fee !== null
                ? `배송비 ${cartData.delivery_fee.toLocaleString()}`
                : '배송비무료'}
            </div>
            <div className={styles.total_price}>
              총 {cartData.allPrice.toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartList;
