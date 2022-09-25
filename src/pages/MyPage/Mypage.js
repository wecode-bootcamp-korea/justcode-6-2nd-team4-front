import React from 'react';
import styles from './MyPage.module.scss';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };
  return (
    <div className={styles.mypage_border}>
      <section className={styles.mypage_header_container}>
        <div className={styles.mypage_header_wrapper}>
          <h1>마이페이지</h1>
          <div className={styles.mypage_header_nav}>
            <span>장바구니</span>
            <span>로그아웃</span>
            <span>고객센터</span>
          </div>
        </div>

        <div className={styles.mypage_header_content_wrapper}>
          <img
            alt="프로필"
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          />
          <div className={styles.mypage_header_content_user}>
            <div className={styles.header_conetnt_user}>
              <h1>사용자</h1>
              <span>님</span>
            </div>
            <p>
              <span>사용자</span>님이 원하는 핸드메이드의 모든것
            </p>
            <p>사조의 공방에서 담아가세요!</p>
          </div>

          <div
            className={styles.mypage_header_content_go_main}
            onClick={goMain}
          >
            둘러보기
            <div className={styles.go_main_img_wrapper}>
              <img
                alt="arrow"
                src="https://cdn-icons-png.flaticon.com/512/8532/8532347.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.mypage_main_container}>
        <div>
          <h1>주문내역 조회</h1>
        </div>
      </section> */}
    </div>
  );
}

export default MyPage;
