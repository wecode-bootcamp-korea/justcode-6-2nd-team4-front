import styles from './MyPage.module.scss';
import MyPageinfo from '../../components/MyPageComp/Info/MyPageInfo';
import MyPageOrder from '../../components/MyPageComp/Order/MyPageOrder';
import Liked from '../../components/MyPageComp/Liked/Liked';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.reload();
  // };

  useEffect(() => {
    fetch('http://localhost:10010/mypage/1', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setResult([data.profile[0].name]))
      .catch(err => {
        console.error(err);
      });
  }, []);

  const goMain = () => {
    navigate('/');
  };
  return (
    <div className={styles.mypage_border}>
      <section className={styles.mypage_header_container}>
        <div className={styles.mypage_header_wrapper}>
          <h1>마이페이지</h1>
          <div className={styles.mypage_header_nav}>
            {/* <span>장바구니</span>
            <span onClick={handleLogout} onMouseLeave={goMain}>
              로그아웃
            </span>
            <span>고객센터</span> */}
          </div>
        </div>

        <div className={styles.mypage_header_content_wrapper}>
          <img
            alt="프로필"
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          />
          <div className={styles.mypage_header_content_user}>
            <div className={styles.header_conetnt_user}>
              <h1>{result}</h1>
              <span>님</span>
            </div>
            <p>
              <span>{result}</span>님이 원하는 핸드메이드의 모든것
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

      <section className={styles.mypage_main_container}>
        <div className={styles.mypage_main_order_li_wrapper}>
          <h1>주문내역 조회</h1>
          <MyPageOrder />
        </div>
      </section>

      <section className={styles.mypage_liked_container}>
        <h1>찜한 목록</h1>
        <Liked />
      </section>

      <section className={styles.mypage_myinfo_container}>
        <h1>나의정보</h1>
        <MyPageinfo />
      </section>
    </div>
  );
}

export default MyPage;
