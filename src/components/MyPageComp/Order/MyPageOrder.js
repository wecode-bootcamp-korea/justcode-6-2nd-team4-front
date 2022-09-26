import React from 'react';
import styles from './MyPageOrder.module.scss';

function MyPageOrder() {
  return (
    <>
      <div className={styles.mypage_main_order_li_title}>
        <div>상품정보</div>
        <div>주문일자</div>
        <div>주문금액</div>
        <div>리뷰</div>
      </div>
      <ul className={styles.mypage_main_order_li_content}>
        <li>상품상품</li>
        <li>일자일자</li>
        <li>금액금액</li>
        <li>리뷰 남기기</li>
      </ul>
    </>
  );
}

export default MyPageOrder;
