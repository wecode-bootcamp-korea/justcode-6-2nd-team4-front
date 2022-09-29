import { useEffect, useState } from 'react';
import styles from './Liked.module.scss';

function Liked() {
  const [result, setResult] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch('http://localhost:10010/mypage/liked/', {
      headers: {
        Authorization: localStorage.getItem('token'),
=======
<<<<<<< HEAD
    fetch(`http://localhost:10010/mypage/liked/${localStorage.getItem('id')}`, {
=======
    fetch('http://localhost:10010/mypage/liked/1', {
>>>>>>> main
      headers: {
>>>>>>> 7e6ebfdcf17ebaf0c2f9d46e804f8c24f9652a45
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setResult(data.LikeList))
      .catch(err => {
        console.error(err);
      });
  }, []);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7e6ebfdcf17ebaf0c2f9d46e804f8c24f9652a45
  console.log(result);

  return (
    <div>
      <div className={styles.mypage_liked_wrapper}>
        {result.map(result => (
          <div className={styles.liked_content_wrapper}>
<<<<<<< HEAD
=======
=======
  return (
    <div>
      <div className={styles.mypage_liked_wrapper}>
        {result.map((result, i) => {
          <div key={i} className={styles.liked_content_wrapper}>
>>>>>>> main
>>>>>>> 7e6ebfdcf17ebaf0c2f9d46e804f8c24f9652a45
            <div className={styles.liked_content}>
              <div className={styles.liked_content_img}>
                <img src={result.thumbnail_image} />
              </div>
              <ul className={styles.liked_content_product}>
                <li>{result.seller_name}</li>
                <li>{result.name}</li>
              </ul>
            </div>
<<<<<<< HEAD
          </div>
        ))}
=======
<<<<<<< HEAD
          </div>
        ))}
=======
          </div>;
        })}
>>>>>>> main
>>>>>>> 7e6ebfdcf17ebaf0c2f9d46e804f8c24f9652a45
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
