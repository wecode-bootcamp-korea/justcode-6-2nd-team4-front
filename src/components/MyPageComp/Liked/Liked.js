import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Liked.module.scss';

function Liked() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const goItem = e => {
    navigate(`/product/${result[e.target.id].product_id}`);
  };

  useEffect(() => {
    fetch('http://localhost:10010/mypage/liked/', {
      headers: {
        Authorization: localStorage.getItem('token'),

        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setResult(data.LikeList))
      // .then(data => {
      //   console.log(data);
      // })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.mypage_liked_wrapper}>
        {result &&
          result.map((result, i) => {
            return (
              <div key={i} className={styles.liked_content_wrapper}>
                <div className={styles.liked_content}>
                  <div className={styles.liked_content_img}>
                    <img
                      id={i}
                      onClick={e => {
                        goItem(e);
                      }}
                      src={result.thumbnail_image}
                    />
                  </div>
                  <ul className={styles.liked_content_product}>
                    <li>{result.seller_name}</li>
                    <li>{result.name}</li>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Liked;

{
  /* <div className={styles.liked_content_img}>
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
            </div>
            <div className={styles.liked_content_product}>
              <li>유현의 공방</li>
              <li>내가 대충 맹글은 코드</li>
            </div> */
}
