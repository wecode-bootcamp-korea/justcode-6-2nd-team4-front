import React from 'react';
import styles from './MyPageInfo.module.scss';

function MyPageinfo() {
  return (
    <section className={styles.mypage_myinfo_container}>
      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>사진</div>
            <div>
              <img
                alt="프로필"
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>이름</div>
            <div>Code Kim</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>아이디</div>
            <div>MY_ID</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>주소</div>
            <div>집 집 집</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>가입일</div>
            <div>2022.09.26</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content_img}>
            <div>연락처</div>
            <div>010-1234-5678</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPageinfo;
