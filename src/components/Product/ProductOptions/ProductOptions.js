import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './ProductOptions.module.scss';
import ProductOptionsItem from './ProductOptionsItem';
import ProductOptionsItemSelectedInfo from './ProductOptionsItemSelectedInfo';
import ProductOptionsItemSelectedInfoContainer from './ProductOptionsItemSelectedInfoContainer';

function ProductOptions() {
  const product = useSelector(state => state.productData.product);
  const options = useSelector(state => state.optionsData.options);

  const [optionTitle, setOptionTitle] = useState('');
  const [optionPrice, setOptionPrice] = useState(0);
  const [optionCount, setOptionCount] = useState(1);

  // props 값으로 초기화
  useEffect(() => {
    setOptionPrice(Number(product.price));
  }, [product.price]);

  // 옵션 선택
  const selectOption = (title, price) => {
    if (optionTitle === '') {
      setOptionTitle(title);
    } else {
      setOptionTitle(optionTitle.concat(' / ', title));
    }
    setOptionPrice(optionPrice + price);
  };

  // 옵션 초기화
  const initOption = () => {
    setOptionTitle('');
    setOptionCount(1);
    setOptionPrice(Number(product.price));
  };

  // 옵션 수 증가
  const handleOptionCount = isIncreased => {
    if (isIncreased) setOptionCount(optionCount + 1);
    else setOptionCount(optionCount !== 1 ? optionCount - 1 : 1);
  };

  return (
    <div className={styles.product_options_container}>
      {options.length !== 0 && <span>옵션</span>}
      {options &&
        options.map(option => {
          return (
            <ProductOptionsItem
              key={option.id}
              option={option}
              selectOption={selectOption}
            />
          );
        })}
      {/* 옵션이 없는 경우 / 옵션이 있는 경우 */}
      {options.length === 0 ? (
        <ProductOptionsItemSelectedInfoContainer>
          <ProductOptionsItemSelectedInfo
            optionTitle={product.name}
            optionPrice={optionPrice}
            optionCount={optionCount}
            handleOptionCount={handleOptionCount}
            initOption={initOption}
          />
        </ProductOptionsItemSelectedInfoContainer>
      ) : (
        optionTitle !== '' && (
          <ProductOptionsItemSelectedInfoContainer>
            {/* 반복 */}
            <ProductOptionsItemSelectedInfo
              optionTitle={optionTitle}
              optionPrice={optionPrice}
              optionCount={optionCount}
              handleOptionCount={handleOptionCount}
              initOption={initOption}
            />
            {/*  */}
          </ProductOptionsItemSelectedInfoContainer>
        )
      )}
      <div className={styles.product_total_price_container}>
        <div className={styles.product_total_price_container_left}>
          <span>총 상품 금액</span>
        </div>
        <div className={styles.product_total_price_container_right}>
          <div className={styles.product_total_price_info}>
            <span>수량 {optionCount}개</span>
            <span>
              {(
                Number(optionPrice * optionCount) + Number(product.deliveryFee)
              ).toLocaleString()}
              원
            </span>
          </div>
          <span className={styles.product_delivery_price_info}>
            (배송비 {Number(product.deliveryFee).toLocaleString()}원 포함)
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductOptions;
