import { useEffect, useState } from 'react';
import styles from './MyPageOrder.module.scss';

function MyPageOrder() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10010/mypage/order/1', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setResult(data.order))
      .catch(err => {
        console.error(err);
      });
  }, []);

  // console.log(result);

  return (
    <>
      <div className={styles.mypage_main_order_li_title}>
        <div>상품정보</div>
        <div>주문일자</div>
        <div>주문금액(수량)</div>
        <div>리뷰</div>
      </div>
      {result.map(result => (
        <ul className={styles.mypage_main_order_li_content}>
          <div className={styles.order_li_product_wrapper}>
            <div className={styles.product_info_img}>
              <img
                className={styles.product_info_img}
                src={result.thumbnail_image}
              />
            </div>
            <ul className={styles.product_info}>
              <li>{result.seller_name}</li>
              <li>{result.name}</li>
            </ul>
          </div>

          <div className={styles.order_li_oreder_wrapper}>
            <span>{result.date}</span>
          </div>

          <div className={styles.order_li_oreder_wrapper}>
            <div className={styles.price}>
              <span>
                {result.origin_price * result.product_quantity}
                <span className={styles.price_unit}>원</span>
              </span>
              <span>
                {result.product_quantity}
                <span className={styles.price_unit}>개</span>
              </span>
            </div>
          </div>

          <div className={styles.order_li_oreder_wrapper}>
            <button>리뷰 남기기</button>
          </div>
        </ul>
      ))}
    </>
  );
}

export default MyPageOrder;
