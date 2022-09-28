import { useSelector } from 'react-redux';

import styles from './ProductContent.module.scss';

function ProductContent(props) {
  const product = useSelector(state => state.productData.product);

  return (
    <div className={styles.product_content_container} ref={props.refer}>
      <img src={product.contentImageUri} alt="none" />
      <p>{product.content}</p>
    </div>
  );
}

export default ProductContent;
