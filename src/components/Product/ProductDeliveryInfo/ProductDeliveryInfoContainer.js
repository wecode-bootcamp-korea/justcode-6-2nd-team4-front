import styles from './ProductDeliveryInfoContainer.module.scss';

function ProductDeliveryInfoContainer(props) {
  return (
    <ul className={styles.product_delivery_container}>{props.children}</ul>
  );
}

export default ProductDeliveryInfoContainer;
