import { useSelector } from 'react-redux';

import styles from './ProductReviews.module.scss';
import star from '../../../assets/svgs/star.svg';

function ProductReviews(props) {
  const product = useSelector(state => state.productData.product);
  const reviews = useSelector(state => state.reviewsData.reviews);

  return (
    <div className={styles.product_review_container} ref={props.refer}>
      <span className={styles.product_review_title}>Reviews ✨</span>
      <div className={styles.product_review_avg_rate}>
        <img src={star} alt={'none'} />
        <span>{product.averageRate} </span>
        <span>({product.reviewCount})</span>
      </div>
      {reviews.map(review => {
        return (
          <div key={review.id} className={styles.product_review}>
            <div className={styles.product_review_info}>
              <div className={styles.product_review_info_left}>
                <img src={review.userImage} alt={'none'} />
              </div>
              <div className={styles.product_review_info_right}>
                <div>
                  <span className={styles.user_name}>{review.userName}</span>
                  <span className={styles.rate}>({review.rate})</span>
                </div>
                <span className={styles.created_at}>{review.createdAt}</span>
              </div>
            </div>
            <div className={styles.product_review_content}>
              <span>{review.content}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductReviews;
