import { useSelector } from 'react-redux';
import {
  DELIVERY_PERIOD,
  DELIVERY_TYPE,
  DELIVERY_FEE,
  DELIVERY_EXCLUDED_AREA,
} from '../../../pages/ProductDetail/constants/deliveryTopic';
import styles from './ProductDeliveryInfo.module.scss';

function ProductDeliveryInfo(props) {
  const product = useSelector(state => state.productData.product);
  const { title } = props;

  return (
    <li className={styles.product_delivery_info}>
      <span>{title}</span>
      <span>{getValue(title, product)}</span>
    </li>
  );
}

function getValue(title, product) {
  switch (title) {
    case DELIVERY_PERIOD:
      return product.deliveryPeriod;
    case DELIVERY_TYPE:
      return product.deliveryType;
    case DELIVERY_FEE:
      return Number(product.deliveryFee).toLocaleString();
    case DELIVERY_EXCLUDED_AREA:
      return product.deliveryExcludedArea;
    default:
      return;
  }
}

export default ProductDeliveryInfo;
