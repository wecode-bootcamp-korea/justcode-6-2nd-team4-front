import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

function Category() {
  const [categoryData, setCategoryData] = useState();
  const [offset, setOffset] = useState(0);
  const [orderType, setOrderType] = useState('main');
  const [popular, setPopular] = useState(false);
  const [volume, setVolume] = useState(false);
  const [created, setCreated] = useState(false);
  const [priceAesc, setPriceAesc] = useState(false);
  const [priceDesc, setPriceDesc] = useState(false);

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const orderedByRecommend = () => {
    setOffset(0);
    setPopular(true);
    setVolume(false);
    setCreated(false);
    setPriceAesc(false);
    setPriceDesc(false);
    setOrderType('popular');
    navigate(`/themeCategory/${params.id}?sort=popular&offset=${offset}`);
    console.log('추천순 눌렀을 때 쿼리변경', location.search, orderType);
  };

  const orderedByVolume = () => {
    setOffset(0);
    setVolume(true);
    setPopular(false);
    setCreated(false);
    setPriceAesc(false);
    setPriceDesc(false);
    setOrderType('volume');
    navigate(`/themeCategory/${params.id}?sort=volume&offset=${offset}`);
    console.log('판매량순 눌렀을 때 쿼리변경', location.search, orderType);
  };

  const orderedByCreated = () => {
    setOffset(0);
    setOrderType('created');
    setVolume(false);
    setPopular(false);
    setCreated(true);
    setPriceAesc(false);
    setPriceDesc(false);
    navigate(`/themeCategory/${params.id}?sort=created&offset=${offset}`);
    console.log('등록순 눌렀을 때 쿼리변경', location.search, orderType);
  };

  const orderedByPriceAesc = () => {
    setOffset(0);
    setOrderType('priceAesc');
    setVolume(false);
    setPopular(false);
    setCreated(false);
    setPriceAesc(true);
    setPriceDesc(false);
    navigate(`/themeCategory/${params.id}?sort=priceAesc&offset=${offset}`);
    console.log('낮은가격순 눌렀을 때 쿼리변경', location.search, orderType);
  };

  const orderedByPriceDesc = () => {
    setOffset(0);
    setVolume(false);
    setPopular(false);
    setCreated(false);
    setPriceAesc(false);
    setPriceDesc(true);
    setOrderType('priceDesc');
    navigate(`/themeCategory/${params.id}?sort=priceDesc&offset=${offset}`);
    console.log('높은가격순 눌렀을 때 쿼리변경', location.search, orderType);
  };

  const showMore = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log('스크롤 이벤트 발생');

    if (scrollTop + clientHeight >= scrollHeight) {
      setOffset(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showMore);
    fetch(
      `http://localhost:10010/themeCategory/${params.id}/sort?sort=${orderType}&offset=${offset}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
    console.log(orderType);
    return () => {
      window.addEventListener('scroll', showMore);
    };
  }, [offset, orderType, params.id]);

  const goToDetail = e => {
    navigate(`/product/${categoryData[e.target.id].product_id}`);
  };

  return (
    <div className={styles.category_wrapper}>
      <div className={styles.title}>
        {categoryData && categoryData[0].category}
      </div>
      <div className={styles.total_filter}>
        <div className={styles.total}>
          전체 {categoryData && categoryData[0].total_count}
        </div>
        <div className={styles.filter}>
          <div
            className={
              popular
                ? `${styles.isclicked_recommends}`
                : `${styles.recommends}`
            }
            onClick={orderedByRecommend}
          >
            추천순
          </div>
          <div
            className={
              volume ? `${styles.isclicked_recommends}` : `${styles.recommends}`
            }
            onClick={orderedByVolume}
          >
            판매량순
          </div>
          <div
            className={
              created
                ? `${styles.isclicked_recommends}`
                : `${styles.recommends}`
            }
            onClick={orderedByCreated}
          >
            등록순
          </div>

          <div
            className={
              priceAesc
                ? `${styles.isclicked_recommends}`
                : `${styles.recommends}`
            }
            onClick={orderedByPriceAesc}
          >
            낮은가격순
          </div>
          <div
            className={
              priceDesc
                ? `${styles.isclicked_recommends}`
                : `${styles.recommends}`
            }
            onClick={orderedByPriceDesc}
          >
            높은가격순
          </div>
        </div>
      </div>
      <div className={styles.card_container}>
        {categoryData &&
          categoryData.map((data, i) => {
            return (
              <div key={i} className={styles.card_box}>
                <ItemCard id={i} goToDetail={goToDetail} data={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Category;
