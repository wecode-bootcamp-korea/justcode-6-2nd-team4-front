import styles from './ProductDeliveryInfo.module.scss';

function ProductDeliveryInfo(props) {
  const { topic, deliveryInfo } = props;

  return (
    <li className={styles.product_delivery_info}>
      <span>{topic}</span>
      <span>{deliveryInfo}</span>
    </li>
  );
}

export default ProductDeliveryInfo;
