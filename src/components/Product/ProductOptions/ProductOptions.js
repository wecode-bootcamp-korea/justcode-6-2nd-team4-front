import { useState } from 'react';

import styles from './ProductOptions.module.scss';
import close from '../../../assets/svgs/close.svg';
import ProductOptionsItem from './ProductOptionsItem';

function ProductOptions(props) {
  const { options, productPrice } = props;

  const [totalOptions, setTotalOptions] = useState('');
  const [totalPrice, setTotalPrice] = useState(Number(productPrice));
  const selectItem = (title, price) => {
    if (totalOptions === '') setTotalOptions(title);
    else setTotalOptions(totalOptions.concat(' / ', title));
    setTotalPrice(totalPrice + price);
  };
  const initItem = () => {
    setTotalOptions('');
    setTotalPrice(Number(productPrice));
  };

  const [productCount, setProductCount] = useState(1);
  const increaseProduct = isUp => {
    if (isUp) setProductCount(productCount + 1);
    else setProductCount(productCount !== 1 ? productCount - 1 : 1);
  };

  return (
    <div className={styles.product_options_container}>
      <span>옵션</span>
      {options &&
        options.map(option => {
          return (
            <ProductOptionsItem
              key={option.id}
              option={option}
              selectItem={selectItem}
            />
          );
        })}
      {totalOptions !== '' && (
        <div className={styles.product_selected_container}>
          {/* 반복됨 */}
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
              <span>
                {Number(totalPrice * productCount).toLocaleString()}원
              </span>
            </div>
          </div>
          {/*  */}
        </div>
      )}
    </div>
  );
}

export default ProductOptions;
