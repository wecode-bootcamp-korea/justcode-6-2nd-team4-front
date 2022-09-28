import { useSelector } from 'react-redux';

import styles from './SellerInfo.module.scss';

function SellerInfo() {
  const product = useSelector(state => state.productData.product);

  return (
    <div className={styles.seller_container}>
      <img
        className={styles.seller_image}
        src={product.sellerImage}
        alt={'none'}
      />
      <span className={styles.seller_name}>{product.sellerName}</span>
    </div>
  );
}

export default SellerInfo;
