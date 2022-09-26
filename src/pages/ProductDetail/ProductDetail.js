import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from './Api';
import { JsonMapper } from 'json-data-mapper';
import { productSchema } from './schemas/productSchema';
import { productOptionsSchema } from './schemas/productOptionsSchema';
import { setProduct } from './redux/productSlice';
import { setOptions } from './redux/optionsSlice';
import { DELIVERY_TOPICS } from './constants/deliveryTopic';
import useMoveScroll from './hooks/useMoveScroll';

import styles from './ProductDetail.module.scss';
import ProductContainer from '../../components/Product/ProductContainer';
import ProductDeliveryInfo from '../../components/Product/ProductDeliveryInfo/ProductDeliveryInfo';
import ProductDeliveryInfoContainer from '../../components/Product/ProductDeliveryInfo/ProductDeliveryInfoContainer';
import SellerInfo from '../../components/Product/SellerInfo/SellerInfo';
import ProductImage from '../../components/Product/ProductImage/ProductImage';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo';
import ProductInfoContainer from '../../components/Product/ProductInfo/ProductInfoContainer';
import ProductDetailContainer from '../../components/Product/ProductDetailContainer';
import ProductOptions from '../../components/Product/ProductOptions/ProductOptions';
import ProductContent from '../../components/Product/ProductContent/ProductContent';
import ProductPurchase from '../../components/Product/ProductPurchase/ProductPurchase';

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // 제품 상세 정보
  useEffect(() => {
    getProduct(productId).then(json => {
      dispatch(
        setProduct(
          JsonMapper.formatToSchema(productSchema, json.getProducts[0])
        )
      );
      dispatch(
        setOptions(
          JsonMapper.formatToSchema(productOptionsSchema, json.getOption)
        )
      );
    });
  }, []);

  // 제품 리뷰 정보

  const tabs = {
    0: useMoveScroll('상품 상세'),
    1: useMoveScroll('상품 리뷰'),
    length: 2,
  };

  return (
    <div className={styles.container}>
      <ProductContainer>
        <ProductDetailContainer>
          <ProductImage />
          <ProductInfoContainer>
            <SellerInfo />
            <ProductInfo />
            <ProductDeliveryInfoContainer>
              {DELIVERY_TOPICS.map(topic => {
                return (
                  <ProductDeliveryInfo key={topic.id} title={topic.title} />
                );
              })}
            </ProductDeliveryInfoContainer>
            <ProductOptions />
            <ProductPurchase />
          </ProductInfoContainer>
        </ProductDetailContainer>
        <ul className={`${styles.product_tab}`}>
          {Array.from(tabs).map((tab, idx) => {
            return (
              <li key={idx} onClick={tab.onMoveElement}>
                {tab.name}
              </li>
            );
          })}
        </ul>
        <ProductContent refer={tabs[0].element} />
        <div style={{ marginBottom: '1200px' }} ref={tabs[1].element}>
          review
        </div>
      </ProductContainer>
    </div>
  );
}

export default ProductDetail;
