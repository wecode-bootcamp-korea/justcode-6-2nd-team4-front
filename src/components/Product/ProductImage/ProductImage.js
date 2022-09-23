import styles from './ProductImage.module.scss';

function ProductImage(props) {
  const { productImageUri } = props;

  return (
    <div className={styles.product_image}>
      <img src={productImageUri} alt={'none'} />
    </div>
  );
}

export default ProductImage;
