import styles from './ProductContainer.module.scss';

function ProductContainer(props) {
  return <div className={styles.product_container}>{props.children}</div>;
}

export default ProductContainer;
