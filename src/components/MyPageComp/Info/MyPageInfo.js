import { useState, useEffect } from 'react';
import styles from './MyPageInfo.module.scss';

function MyPageinfo() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('http://localhost:10010/mypage/1', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data =>
        setResult([
          data.info[0].name,
          data.info[0].phone,
          data.info[0].email,
          data.info[0].address,
          data.info[0].detailed_address,
        ])
      )
      .catch(err => {
        console.error(err);
      });
  }, []);

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
            <div>
              <div>이름</div>
              {/* <ul>
                {result.map(result => (
                  <span key={0}>{result.info}</span>
                ))}
              </ul> */}
            </div>
            <div>{result[0]}</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content}>
            <div>연락처</div>
            <div>{result[1]}</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content}>
            <div>아이디</div>
            <div>{result[2]}</div>
          </div>
        </div>
      </div>

      <div className={styles.mypage_myinfo_wrapper}>
        <div className={styles.myinfo_content_wrapper}>
          <div className={styles.myinfo_content}>
            <div>주소</div>
            <div>{result[3]}</div>
            <div className={styles.myinfo_content}>
              <div>상세주소</div>
              <div>{result[4]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPageinfo;
