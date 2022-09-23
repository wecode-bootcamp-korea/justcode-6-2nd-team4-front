import styles from './SellerInfo.module.scss';

function SellerInfo(props) {
  const { sellerImage, sellerName } = props;

  return (
    <div className={styles.seller_container}>
      <img className={styles.seller_image} src={sellerImage} alt={'none'} />
      <span className={styles.seller_name}>{sellerName}</span>
    </div>
  );
}

export default SellerInfo;
