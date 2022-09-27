import styles from './ProductOptionsItemSelectedInfo.module.scss';
import close from '../../../assets/svgs/close.svg';

function ProductOptionsItemSelectedInfo(props) {
  const {
    optionsSelectedIdx,
    optionTitle,
    optionPrice,
    optionCount,
    handleOptionCount,
    initOption,
  } = props;

  return (
    <div className={styles.product_selected}>
      <div className={styles.product_selected_left}>
        <span>{optionTitle}</span>
        <div className={styles.product_selected_count_container}>
          <button onClick={() => handleOptionCount(false, optionsSelectedIdx)}>
            -
          </button>
          <span>{optionCount}</span>
          <button onClick={() => handleOptionCount(true, optionsSelectedIdx)}>
            +
          </button>
        </div>
      </div>
      <div className={styles.product_selected_right}>
        <img
          src={close}
          alt="none"
          onClick={() => initOption(optionsSelectedIdx)}
        />
        <span>{Number(optionPrice * optionCount).toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default ProductOptionsItemSelectedInfo;
