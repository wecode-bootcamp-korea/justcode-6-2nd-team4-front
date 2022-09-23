import { useEffect, useState } from 'react';
import { getProduct } from './Api';
import { JsonMapper } from 'json-data-mapper';
import { productSchema } from './schemas/productSchema';
import { productOptionsSchema } from './schemas/productOptionsSchema';

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

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);

  // 제품 상세 정보
  useEffect(() => {
    getProduct().then(json => {
      setProduct(JsonMapper.formatToSchema(productSchema, json.getProducts[0]));
      setOptions(
        JsonMapper.formatToSchema(productOptionsSchema, json.getOption)
      );
    });
  }, []);

  // 제품 리뷰 정보

  return (
    <div className={styles.container}>
      <ProductContainer>
        <ProductDetailContainer>
          <ProductImage productImageUri={product.imageUri} />
          <ProductInfoContainer>
            <SellerInfo
              sellerImage={product.sellerImage}
              sellerName={product.sellerName}
            />
            <ProductInfo
              name={product.name}
              price={product.price}
              averageRate={product.averageRate}
              reviewCount={product.reviewCount}
              likeCount={product.likeCount}
            />
            <ProductDeliveryInfoContainer>
              <ProductDeliveryInfo
                topic={'제작기간'}
                deliveryInfo={product.deliveryPeriod}
              />
              <ProductDeliveryInfo
                topic={'배송구분'}
                deliveryInfo={product.deliveryType}
              />
              <ProductDeliveryInfo
                topic={'배송비'}
                deliveryInfo={Number(product.deliveryFee).toLocaleString()}
              />
              <ProductDeliveryInfo
                topic={'배송 제외 지역'}
                deliveryInfo={product.deliveryExcludedArea}
              />
            </ProductDeliveryInfoContainer>
            <ProductOptions options={options} productPrice={product.price} />
            {/* 총 상품 금액, 장바구니, 바로구매 */}
          </ProductInfoContainer>
        </ProductDetailContainer>
        {/* 제품 상세 정보, 리뷰 링크이동 */}
        {/* <div>
          <img src={product.contentImageUri} alt="none" />
          <div>
            <strong>{product.content}</strong>
          </div>
        </div> */}
        {/* 제품 상세 정보 */}
        {/* 제품 리뷰 정보 */}
      </ProductContainer>
    </div>
  );
}

export default ProductDetail;
