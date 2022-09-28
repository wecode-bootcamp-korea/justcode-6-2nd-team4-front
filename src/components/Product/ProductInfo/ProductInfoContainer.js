import styles from './ProductInfoContainer.module.scss';

function ProductInfoContainer(props) {
  return <div className={styles.product_info_container}>{props.children}</div>;
}

export default ProductInfoContainer;
