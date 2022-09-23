import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import ItemCard from '../../components/ItemCard/ItemCard';

function Category() {
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    fetch('/mocks/Category/categoryItemList.json')
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
  }, []);

  return (
    <div className={styles.category_wrapper}>
      <div className={styles.title}>가구</div>
      <div className={styles.total_filter}>
        <div className={styles.total}>전체</div>
        <div className={styles.filter}>
          <div className={styles.recommends}>추천순</div>
          <div className={styles.sales_rate}>판매량순</div>
        </div>
      </div>
      <div className={styles.card_container}>
        {categoryData &&
          categoryData.map((data, i) => {
            return (
              <div key={i} className={styles.card_box}>
                <ItemCard data={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Category;
