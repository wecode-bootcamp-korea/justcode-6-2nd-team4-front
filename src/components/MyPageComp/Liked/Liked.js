import React from 'react';
import styles from './Liked.module.scss';

function Liked() {
  return (
    <div>
      <div className={styles.mypage_liked_wrapper}>
        <div className={styles.liked_content_wrapper}>
          <ul className={styles.liked_content}>
            <div className={styles.liked_content_img}>
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
            </div>
            <div className={styles.liked_content_product}>
              <li>사조의 공방</li>
              <li>그냥 심심해서 만든 코드</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Liked;
