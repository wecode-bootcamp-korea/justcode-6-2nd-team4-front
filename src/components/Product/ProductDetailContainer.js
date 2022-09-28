import styles from './ProductDetailContainer.module.scss';

function ProductDetailContainer(props) {
  return (
    <div className={styles.product_detail_container}>{props.children}</div>
  );
}

export default ProductDetailContainer;
