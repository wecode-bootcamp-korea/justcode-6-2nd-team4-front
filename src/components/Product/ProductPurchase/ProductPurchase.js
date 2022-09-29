import { useSelector } from 'react-redux';

import styles from './ProductPurchase.module.scss';
import notice from '../../../assets/svgs/notice.svg';
import { postProductCart } from '../../../pages/ProductDetail/Api';

function ProductPurchase() {
  const product = useSelector(state => state.productData.product);
  const optionsSelected = useSelector(
    state => state.optionsData.optionsSelected
  );

  const moveProductToCart = () => {
    postProductCart({
      productId: product.id,
      deliveryFee: product.deliveryFee,
      options: optionsSelected.map(opt => {
        return {
          option: opt.title,
          price: opt.price,
          quantity: opt.count,
        };
      }),
    }).then(res => {
      if (!res.ok) {
        alert('장바구니 추가를 실패하였습니다.');
      } else {
        alert('장바구니에 추가가 되었습니다.');
      }
    });
  };

  return (
    <>
      <div className={styles.product_purchase_container}>
        <button onClick={moveProductToCart}>장바구니</button>
        <button onClick={() => alert('장바구니로 상품을 이동시켜주세요.')}>
          바로구매
        </button>
      </div>
      <div className={styles.product_notice}>
        <img src={notice} alt={'none'} />
        <span>잠깐! 이 제품은 공산품이 아닙니다.</span>
      </div>
    </>
  );
}

export default ProductPurchase;
