import { useSelector } from 'react-redux';

import styles from './ProductInfo.module.scss';
import heart from '../../../assets/svgs/heart.svg';
import heartRed from '../../../assets/svgs/heart_red.svg';
import share from '../../../assets/svgs/share.svg';
import star from '../../../assets/svgs/star.svg';

function ProductInfo() {
  const product = useSelector(state => state.productData.product);

  return (
    <>
      <div className={styles.product_title}>
        <span>{product.name}</span>
      </div>
      <div className={styles.product_contents_container}>
        <div className={styles.product_contents}>
          <div className={styles.product_price}>
            <span>{Number(product.price).toLocaleString()}</span>
          </div>
          <div className={styles.product_ratings}>
            <div className={styles.star_icon}>
              <img src={star} alt={'none'} />
            </div>
            <span>
              {product.averageRate} ({product.reviewCount})
            </span>
          </div>
        </div>
        <div className={styles.product_menu_container}>
          {/* TODO: 토큰값이 있을 경우에만 하트 출력 및 클릭 이벤트 구현 필요 */}
          <div className={styles.menu_heart}>
            <img src={!product.isLike ? heart : heartRed} alt={'none'} />
            <span>{product.likeCount}</span>
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
