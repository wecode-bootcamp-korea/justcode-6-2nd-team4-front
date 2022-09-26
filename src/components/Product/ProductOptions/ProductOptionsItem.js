import { useState } from 'react';
import styles from './ProductOptionsItem.module.scss';

function ProductOptionsItem(props) {
  const { option, selectOption } = props;

  const [isDropped, setIsDropped] = useState(false);
  const activateDropDown = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div
      className={styles.product_options_item_container}
      onClick={activateDropDown}
    >
      <span
        className={
          !isDropped
            ? styles.option_title
            : `${styles.option_title} ${styles.option_title_inactive_border_radius}`
        }
      >
        {option.title}
      </span>
      {isDropped && (
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
                onClick={() => selectOption(opt.title, opt.price)}
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
