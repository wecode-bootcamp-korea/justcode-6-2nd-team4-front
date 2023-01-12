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
                      alt={'propduct_img'}
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
