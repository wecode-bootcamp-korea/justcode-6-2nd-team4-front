import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import styles from './MainItemList.module.scss';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

function MainItemList() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [newData, setNewData] = useState([]);

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
      transform: `translateX(-74.5%)`,
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
      transform: `translateX(-74.5%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  useEffect(() => {
    fetch('/mocks/MainPage/new.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setNewData(result.main));
    // .then(res => setPopularData(res.popular));
    console.log('newdata', newData.popular);
    // console.log('popular', popularData);
  }, []);

  let newFirstRow = [
    newData.new[0],
    newData.new[1],
    newData.new[2],
    newData.new[3],
    newData.new[4],
    newData.new[5],
    newData.new[6],
    newData.new[7],
  ];

  let newSecondRow = [
    newData.new[8],
    newData.new[9],
    newData.new[10],
    newData.new[11],
    newData.new[12],
    newData.new[13],
    newData.new[14],
    newData.new[15],
  ];
  let popularFirstRow = [
    newData.popular[0],
    newData.popular[1],
    newData.popular[2],
    newData.popular[3],
    newData.popular[4],
    newData.popular[5],
    newData.popular[6],
    newData.popular[7],
  ];

  let popularSecondRow = [
    newData.popular[8],
    newData.popular[9],
    newData.popular[10],
    newData.popular[11],
    newData.popular[12],
    newData.popular[13],
    newData.popular[14],
    newData.popular[15],
  ];

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
            {newFirstRow.map((data, i) => {
              return (
                <div key={i}>
                  <ItemCard data={data} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style}>
            {newSecondRow.map((data, i) => {
              return (
                <div key={i}>
                  <ItemCard data={data} />
                </div>
              );
            })}
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
            {popularFirstRow.map((data, i) => {
              return (
                <div key={i}>
                  <ItemCard data={data} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style2}>
            {popularSecondRow.map((data, i) => {
              return (
                <div key={i}>
                  <ItemCard data={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainItemList;
