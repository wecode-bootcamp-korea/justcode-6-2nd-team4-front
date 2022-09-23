import styles from './ProductInfo.module.scss';
import heart from '../../../assets/svgs/heart.svg';
import share from '../../../assets/svgs/share.svg';
import star from '../../../assets/svgs/star.svg';

function ProductInfo(props) {
  const { name, price, averageRate, reviewCount, likeCount } = props;

  return (
    <>
      <div className={styles.product_title}>
        <span>{name}</span>
      </div>
      <div className={styles.product_contents_container}>
        <div className={styles.product_contents}>
          <div className={styles.product_price}>
            <span>{Number(price).toLocaleString()}</span>
          </div>
          <div className={styles.product_ratings}>
            <div className={styles.star_icon}>
              <img src={star} alt={'none'} />
            </div>
            <span>
              {averageRate} ({reviewCount})
            </span>
          </div>
        </div>
        <div className={styles.product_menu_container}>
          <div className={styles.menu_heart}>
            <img src={heart} alt={'none'} />
            <span>{likeCount}</span>
          </div>
          <div className={styles.menu_share}>
            <img src={share} alt={'none'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
