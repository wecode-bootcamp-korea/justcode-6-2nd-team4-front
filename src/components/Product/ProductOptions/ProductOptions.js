import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOptionsSelected,
  removeOptionsSelected,
  decreaseOptionsSelectedCount,
  increaseOptionsSelectedCount,
} from '../../../pages/ProductDetail/redux/optionsSlice';

import styles from './ProductOptions.module.scss';
import ProductOptionsItem from './ProductOptionsItem';
import ProductOptionsItemSelectedInfo from './ProductOptionsItemSelectedInfo';
import ProductOptionsItemSelectedInfoContainer from './ProductOptionsItemSelectedInfoContainer';

function ProductOptions() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.productData.product);
  const options = useSelector(state => state.optionsData.options);
  const optionsSelected = useSelector(
    state => state.optionsData.optionsSelected
  );

  const [optionTitle, setOptionTitle] = useState('');
  const [optionPrice, setOptionPrice] = useState(0);
  const [optionCount, setOptionCount] = useState(1);

  // 초기화
  useEffect(() => {
    setOptionPrice(Number(product.price));
    // 옵션이 없을 경우
    if (options.length === 0 && product.name) {
      dispatch(
        addOptionsSelected({
          title: product.name,
          price: product.price,
          count: optionCount,
        })
      );
    }
  }, [product.name, product.price]);

  // 옵션 선택 여부
  const [isOptionsSelected, setIsOptionsSelected] = useState([]);
  useEffect(() => {
    initIsOptionsSelected(options.length);
  }, [options.length]);

  // 옵션 선택 여부 초기화
  const initIsOptionsSelected = optionsLength => {
    const arr = new Array(optionsLength).fill(false);
    setIsOptionsSelected(arr);
  };

  // 옵션 선택 여부
  const handleIsOptionsSelected = (optionsIdx, isSelected) => {
    const arr = isOptionsSelected;
    arr[optionsIdx] = isSelected;
    setIsOptionsSelected(arr);
  };

  const [isAllSelected, setIsAllSelected] = useState(false);
  useEffect(() => {
    if (isAllSelected) {
      initIsOptionsSelected(options.length);
      dispatch(
        addOptionsSelected({
          title: optionTitle,
          price: optionPrice,
          count: optionCount,
        })
      );

      setOptionTitle('');
      setOptionPrice(Number(product.price));
      setOptionCount(1);
    }
  }, [isAllSelected]);

  // 옵션 선택
  const selectOption = (title, price, optionsIdx) => {
    // 선택한 옵션 집계
    if (optionTitle === '') {
      setOptionTitle(title);
    } else {
      setOptionTitle(optionTitle.concat(' / ', title));
    }
    setOptionPrice(optionPrice + price);

    // 옵션 선택 처리
    if (options.length !== 0) {
      handleIsOptionsSelected(optionsIdx, true);
      setIsAllSelected(isOptionsSelected.every(opt => opt === true));
    }
  };

  // 선택한 옵션 삭제
  const initOption = optionsSelectedIdx => {
    setOptionTitle('');
    setOptionCount(1);
    setOptionPrice(Number(product.price));
    dispatch(removeOptionsSelected(optionsSelectedIdx));
  };

  // 옵션 수 증가
  const handleOptionCount = (isIncreased, optionsSelectedIdx) => {
    if (isIncreased) {
      dispatch(increaseOptionsSelectedCount(optionsSelectedIdx));
      // 옵션이 없을 경우
      if (options.length === 0) {
        setOptionCount(optionCount + 1);
      }
    } else {
      dispatch(decreaseOptionsSelectedCount(optionsSelectedIdx));
      // 옵션이 없을 경우
      if (options.length === 0) {
        setOptionCount(optionCount !== 1 ? optionCount - 1 : 1);
      }
    }
  };

  // 총 상품 수
  const calculateTotalOptionsCount = () => {
    // 옵션이 없을 경우
    if (options.length === 0) {
      return Number(optionCount);
    }
    let totalCount = 0;
    for (let i = 0; i < optionsSelected.length; i++) {
      if (!optionsSelected[i]) continue;
      totalCount += optionsSelected[i].count;
    }
    return Number(totalCount);
  };

  // 총 상품 금액
  const calculateTotalOptionsPrice = () => {
    // 옵션이 없을 경우
    if (options.length === 0) {
      return optionCount * product.price + Number(product.deliveryFee);
    }
    let sum = 0;
    for (let i = 0; i < optionsSelected.length; i++) {
      if (!optionsSelected[i]) continue;
      sum += optionsSelected[i].price * optionsSelected[i].count;
    }
    return Number(sum) + Number(product.deliveryFee);
  };

  return (
    <div className={styles.product_options_container}>
      {options.length !== 0 && <span>옵션</span>}
      {options &&
        options.map((option, idx) => {
          return (
            <ProductOptionsItem
              key={option.id}
              optionsIdx={idx}
              isOptionsSelected={isOptionsSelected}
              option={option}
              selectOption={selectOption}
            />
          );
        })}
      {/* 옵션이 없는 경우 / 옵션이 있는 경우 */}
      {options.length === 0 ? (
        <ProductOptionsItemSelectedInfoContainer>
          <ProductOptionsItemSelectedInfo
            optionsSelectedIdx={0}
            optionTitle={product.name}
            optionPrice={optionPrice}
            optionCount={optionCount}
            handleOptionCount={handleOptionCount}
            initOption={initOption}
          />
        </ProductOptionsItemSelectedInfoContainer>
      ) : (
        <ProductOptionsItemSelectedInfoContainer>
          {optionsSelected.map((option, idx) => {
            if (!option) return;
            return (
              <ProductOptionsItemSelectedInfo
                key={idx}
                optionsSelectedIdx={idx}
                optionTitle={option.title}
                optionPrice={option.price}
                optionCount={option.count}
                handleOptionCount={handleOptionCount}
                initOption={initOption}
              />
            );
          })}
        </ProductOptionsItemSelectedInfoContainer>
      )}
      <div className={styles.product_total_price_container}>
        <div className={styles.product_total_price_container_left}>
          <span>총 상품 금액</span>
        </div>
        <div className={styles.product_total_price_container_right}>
          <div className={styles.product_total_price_info}>
            <span>수량 {calculateTotalOptionsCount()}개</span>
            <span>{calculateTotalOptionsPrice().toLocaleString()}원</span>
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
