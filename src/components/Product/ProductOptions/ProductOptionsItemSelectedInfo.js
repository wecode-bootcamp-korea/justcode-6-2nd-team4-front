import styles from './ProductOptionsItemSelectedInfo.module.scss';
import close from '../../../assets/svgs/close.svg';

function ProductOptionsItemSelectedInfo(props) {
  const { totalOptions, totalPrice, productCount, increaseProduct, initItem } =
    props;

  return (
    <div className={styles.product_selected}>
      <div className={styles.product_selected_left}>
        <span>{totalOptions}</span>
        <div className={styles.product_selected_count_container}>
          <button onClick={() => increaseProduct(false)}>-</button>
          <span>{productCount}</span>
          <button onClick={() => increaseProduct(true)}>+</button>
        </div>
      </div>
      <div className={styles.product_selected_right}>
        <img src={close} alt="none" onClick={initItem} />
        <span>{Number(totalPrice * productCount).toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default ProductOptionsItemSelectedInfo;
