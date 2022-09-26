import styles from './ProductPurchase.module.scss';
import notice from '../../../assets/svgs/notice.svg';

function ProductPurchase() {
  return (
    <>
      <div className={styles.product_purchase_container}>
        <button>장바구니</button>
        <button>바로구매</button>
      </div>
      <div className={styles.product_notice}>
        <img src={notice} alt={'none'} />
        <span>잠깐! 이 제품은 공산품이 아닙니다.</span>
      </div>
    </>
  );
}

export default ProductPurchase;
