import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { patchProductLike } from '../../../pages/ProductDetail/Api';

import styles from './ProductInfo.module.scss';
import heart from '../../../assets/svgs/heart.svg';
import heartRed from '../../../assets/svgs/heart_red.svg';
import share from '../../../assets/svgs/share.svg';
import star from '../../../assets/svgs/star.svg';

function ProductInfo() {
  const product = useSelector(state => state.productData.product);

  const [likeCount, setLikeCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    setIsLiked(product.isLike);
    setLikeCount(product.likeCount);
  }, [product.isLike, product.likeCount]);

  const activateHeart = () => {
    patchProductLike(product.id).then(json => {
      setIsLiked(json.isLike);
      setLikeCount(json.likeCount);
    });
  };

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
          {localStorage.getItem('token') && (
            <div className={styles.menu_heart} onClick={activateHeart}>
              <img src={!isLiked ? heart : heartRed} alt={'none'} />
              <span>{likeCount}</span>
            </div>
          )}
          <div
            className={styles.menu_share}
            onClick={() => {
              navigator
                .share({ title: product.name, text: '제품 공유', url: '' })
                .then(() => console.log())
                .catch(error => console.log(error));
            }}
          >
            <img src={share} alt={'none'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
