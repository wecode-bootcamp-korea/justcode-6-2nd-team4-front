import { useSelector } from 'react-redux';

import styles from './ProductImage.module.scss';

function ProductImage() {
  const product = useSelector(state => state.productData.product);

  return (
    <div className={styles.product_image}>
      <img src={product.imageUri} alt={'none'} />
    </div>
  );
}

export default ProductImage;
