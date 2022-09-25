import React, { useEffect, useState } from 'react';
import styles from './Category.module.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

function Category() {
  const [categoryData, setCategoryData] = useState();
  const [offset, setOffset] = useState(0);
  const [orderType, setOrderType] = useState('main');

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

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
  }, [params.id]);

  const orderedByRecommend = async () => {
    setOffset(0);
    setOrderType('popular');
    navigate(`/themeCategory/${params.id}?sort=${orderType}&offset=${offset}`);
    console.log('추천순 눌렀을 때 쿼리변경', location.search, orderType);
    await fetch(
      `http://localhost:10010/themeCategory/${params.id}/sort${location.search}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
    console.log('추천순 눌렀을 때 데이터 패치', location.search);
  };

  const orderedByVolume = async () => {
    setOffset(0);
    setOrderType('volume');
    navigate(`/themeCategory/${params.id}?sort=volume&offset=${offset}`);
    console.log('판매량순 눌렀을 때 쿼리변경', location.search, orderType);
    await fetch(
      `http://localhost:10010/themeCategory/${params.id}/sort${location.search}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setCategoryData(result.data);
      });
    console.log('추천순 눌렀을 때 데이터 패치', location.search);
  };

  const orderedByCreated = async () => {
    setOffset(0);
    setOrderType('created');
    navigate(`/themeCategory/${params.id}?sort=created&offset=${offset}`);
    console.log('등록순 눌렀을 때 쿼리변경', location.search, orderType);
    await fetch(
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

  const orderedByPriceAesc = () => {
    setOffset(0);
    setOrderType('priceAesc');
    navigate(`/themeCategory/${params.id}?sort=priceAesc&offset=${offset}`);
    console.log('낮은가격순 눌렀을 때 쿼리변경', location.search, orderType);
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

  const orderedByPriceDesc = () => {
    setOffset(0);
    setOrderType('priceDesc');
    navigate(`/themeCategory/${params.id}?sort=priceDesc&offset=${offset}`);
    console.log('높은가격순 눌렀을 때 쿼리변경', location.search, orderType);
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

  const showMore = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log('스크롤 이벤트 발생');

    if (scrollTop + clientHeight >= scrollHeight && orderType === 'main') {
      navigate(`/themeCategory/${params.id}?offset=1`);
      console.log('바껴라 좀', offset, location.search);
      fetch(`http://localhost:10010/themeCategory/1?offset=1`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(result => {
          setCategoryData(result.data);
        });
    } else if (
      scrollTop + clientHeight >= scrollHeight &&
      orderType === 'popular'
    ) {
      navigate(`/themeCategory/${params.id}?sort=popular&offset=1`);
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
    } else if (
      scrollTop + clientHeight >= scrollHeight &&
      orderType === 'volume'
    ) {
      navigate(`/themeCategory/${params.id}?sort=volume&offset=1`);
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
    } else if (
      scrollTop + clientHeight >= scrollHeight &&
      orderType === 'created'
    ) {
      navigate(`/themeCategory/${params.id}?sort=created&offset=1`);
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
    } else if (
      scrollTop + clientHeight >= scrollHeight &&
      orderType === 'priceAesc'
    ) {
      navigate(`/themeCategory/${params.id}?sort=priceAesc&offset=1`);

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
    } else if (
      scrollTop + clientHeight >= scrollHeight &&
      orderType === 'priceDesc'
    ) {
      navigate(`/themeCategory/${params.id}?sort=priceDesc&offset=1`);
      console.log('높은가격더보기', location.search);
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
    }

    console.log(offset);
    console.log('더보기 눌렀을 때', orderType, offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', showMore);
    return () => {
      window.addEventListener('scroll', showMore);
    };
  }, [offset]);

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
          <div className={styles.recommends} onClick={orderedByRecommend}>
            추천순
          </div>
          <div className={styles.recommends} onClick={orderedByVolume}>
            판매량순
          </div>
          <div className={styles.recommends} onClick={orderedByCreated}>
            등록순
          </div>

          <div className={styles.recommends} onClick={orderedByPriceAesc}>
            낮은가격순
          </div>
          <div className={styles.recommends} onClick={orderedByPriceDesc}>
            높은가격순
          </div>
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
      {/* <div onClick={showMore}> 더보기 </div> */}
    </div>
  );
}
export default Category;
