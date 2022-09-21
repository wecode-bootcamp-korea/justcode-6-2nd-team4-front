import React from 'react';
import { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import styles from './MainItemList.module.scss';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

function MainItemList() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(2);

  const [style, setStyle] = useState({
    transform: `translateX(0%)`,
    transition: `all 0.4s ease-in-out`,
  });
  const [style2, setStyle2] = useState({
    transform: `translateX(0%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const handleNext = () => {
    setPage(2);
    setStyle({
      transform: `translateX(-75%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const handlePrev = () => {
    setPage(1);
    setStyle({
      transform: `translateX(0%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };
  const handleNext2 = () => {
    setPage2(2);
    setStyle2({
      transform: `translateX(-75%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const handlePrev2 = () => {
    setPage2(1);
    setStyle2({
      transform: `translateX(0%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>이번 달 신상 모음✨</div>
          <div className={styles.slider_controler}>
            <div className={styles.page}>{page}/2</div>
            <div className={styles.arrow_box} onClick={handlePrev}>
              <img src={prev}></img>
            </div>
            <div className={styles.arrow_box} onClick={handleNext}>
              <img src={next}></img>
            </div>
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style}>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style}>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>이번 달 인기 제품🔥</div>
          <div className={styles.slider_controler}>
            <div className={styles.page}>{page2}/2</div>
            <div className={styles.arrow_box} onClick={handlePrev2}>
              <img src={prev}></img>
            </div>
            <div className={styles.arrow_box} onClick={handleNext2}>
              <img src={next}></img>
            </div>
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style2}>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style2}>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
            <div>
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainItemList;
