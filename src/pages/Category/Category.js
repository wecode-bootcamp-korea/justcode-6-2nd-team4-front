import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

function Category() {
  const [categoryData, setCategoryData] = useState();
  const [offset, setOffset] = useState(0);

  const location = useLocation();
  console.log(location);
  const params = useParams();
  const navigate = useNavigate();

  const showMore = () => {
    setOffset(offset + 1);
    navigate(`/themeCategory/${params.id}?offset=${offset}`);
  };

  useEffect(() => {
    fetch(
      `http://localhost:10010/themeCategory/${params.id}${location.search}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
  }, [offset]);

  const orderedRouter = () => {
    setOffset(0);
    navigate(`/themeCategory/${params.id}sort?sort=popular&offset=${offset}`);
  };
  const orderedByRecommend = () => {
    fetch(
      `http://localhost:10010/themeCategory/${params.id}/sort${location.search}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
  };

  return (
    <div className={styles.category_wrapper}>
      <div className={styles.title}>가구</div>
      <div className={styles.total_filter}>
        <div className={styles.total}>
          전체{categoryData && categoryData[0].total_count}
        </div>
        <div className={styles.filter}>
          <div
            className={styles.recommends}
            onClick={() => {
              orderedRouter();
              orderedByRecommend();
            }}
          >
            추천순
          </div>
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
      <div onClick={showMore}> 더보기 </div>
    </div>
  );
}
export default Category;
