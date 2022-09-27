import { useEffect, useState } from 'react';
import styles from './ProductOptionsItem.module.scss';

function ProductOptionsItem(props) {
  const { optionsIdx, isOptionsSelected, option, selectOption } = props;

  const [isDropped, setIsDropped] = useState(false);
  const activateDropDown = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div
      className={styles.product_options_item_container}
      onClick={!isOptionsSelected[optionsIdx] ? activateDropDown : null}
    >
      <span
        className={
          !isDropped
            ? !isOptionsSelected[optionsIdx]
              ? styles.option_title
              : `${styles.option_title} ${styles.option_title_inactive}`
            : `${styles.option_title} ${styles.option_title_inactive_border_radius}`
        }
      >
        {option.title}
      </span>
      {isDropped && !isOptionsSelected[optionsIdx] && (
        <ul className={styles.option_list}>
          {option.detail.map((opt, idx) => {
            const isLastElement = option.detail.length - 1 !== idx;
            return (
              <li
                key={opt.id}
                className={
                  isLastElement
                    ? styles.option_item
                    : `${styles.option_item} ${styles.option_item_inactive_border_bottom}`
                }
                onClick={() => selectOption(opt.title, opt.price, optionsIdx)}
              >
                {opt.title} (+{Number(opt.price).toLocaleString()}원)
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ProductOptionsItem;
