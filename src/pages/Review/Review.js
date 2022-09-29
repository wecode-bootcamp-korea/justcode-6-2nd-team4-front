import { useEffect, useState, useRef } from 'react';
import styles from './Review.module.scss';
import Button from '../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Review() {
  const reviewRef = useRef('');
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const goMypage = () => {
    navigate('/mypage');
  };

  const reviewHandler = () => {
    fetch(`http://localhost:10010/productreviews/${id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        review_content: reviewRef.current.value,
        product_id: id,
      }),
    });
    goMypage();
  };

  return (
    <div className={styles.review_border}>
      <div className={styles.review_header}>
        <h1 className={styles.review_header_title}>상품 후기작성</h1>
        <div className={styles.review_header_text}>
          <li>
            작성하신 후기는 다른 회원들에게 공개됩니다. 후기 내용은 20자 이상
            작성합니다.
          </li>
          <li>
            상품과 관련 없는 내용, 단순 문자 및 기호의 나열/반복 확인 시
            관리자에 의해 후기가 삭제 될 수 있습니다.
          </li>
          <li>
            개인정보 및 광고, 비속어가 포함된 내용의 후기 (비노출 대상) 특히
            후기 도용 시 적립금 2배 회수, 1년간 커뮤니티 이용 제한, 3개월간 후기
            적립금 지급이 중단됩니다.
          </li>
        </div>
      </div>
      <div className={styles.review_form}>
        <p>상품에 대한 평가를 20자 이상 작성해 주새요.</p>
        <input
          ref={reviewRef}
          // onChange={e => set(e.target.value)}
          placeholder="내용"
        ></input>
      </div>
      <div className={styles.review_button}>
        <Button event={reviewHandler} title="제출" />
      </div>
    </div>
  );
}

export default Review;
