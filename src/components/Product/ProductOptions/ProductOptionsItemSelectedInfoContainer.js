import styles from './ProductOptionsItemSelectedInfoContainer.module.scss';

function ProductOptionsItemSelectedInfoContainer(props) {
  return (
    <div className={styles.product_selected_container}>{props.children}</div>
  );
}

export default ProductOptionsItemSelectedInfoContainer;
