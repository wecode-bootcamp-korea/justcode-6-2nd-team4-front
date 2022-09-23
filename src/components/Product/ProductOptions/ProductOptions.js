import { useEffect, useState } from 'react';

import styles from './ProductOptions.module.scss';
import ProductOptionsItem from './ProductOptionsItem';
import ProductOptionsItemSelectedInfo from './ProductOptionsItemSelectedInfo';
import ProductOptionsItemSelectedInfoContainer from './ProductOptionsItemSelectedInfoContainer';

function ProductOptions(props) {
  const { options, productPrice } = props;

  const [totalOptions, setTotalOptions] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(Number(productPrice));
  }, [productPrice]);

  const selectItem = (title, price) => {
    if (totalOptions === '') setTotalOptions(title);
    else setTotalOptions(totalOptions.concat(' / ', title));
    setTotalPrice(totalPrice + price);
  };
  const initItem = () => {
    setTotalOptions('');
    setTotalPrice(Number(productPrice));
    setProductCount(1);
  };

  const [productCount, setProductCount] = useState(1);
  const increaseProduct = isIncreased => {
    if (isIncreased) setProductCount(productCount + 1);
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
        <ProductOptionsItemSelectedInfoContainer>
          {/* 반복됨 */}
          <ProductOptionsItemSelectedInfo
            totalOptions={totalOptions}
            totalPrice={totalPrice}
            productCount={productCount}
            increaseProduct={increaseProduct}
            initItem={initItem}
          />
          {/*  */}
        </ProductOptionsItemSelectedInfoContainer>
      )}
    </div>
  );
}

export default ProductOptions;
