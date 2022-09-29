import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import styles from './MainItemList.module.scss';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

function MainItemList() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [newData, setNewData] = useState();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetch('http://localhost:10010/', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setNewData(result.main);
      });
  }, []);

  const newFirstRow = [];
  const popularFirstRow = [];

  if (newData) {
    for (let i = 0; i < 7; i++) {
      newFirstRow.push(newData.new[i]);
      popularFirstRow.push(newData.popular[i]);
    }
  }

  const newSecondRow = [];
  const popularSecondRow = [];

  if (newData) {
    for (let i = 8; i < 15; i++) {
      newSecondRow.push(newData.new[i]);
      popularSecondRow.push(newData.popular[i]);
    }
  }

  const handlePrev2 = () => {
    setPage2(1);
    setStyle2({
      transform: `translateX(0%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const newFirstRowGoMain = e => {
    if (newFirstRow) {
      navigate(`/product/${newFirstRow[e.target.id].product_id}`);
    }
  };
  const newSecondRowGoMain = e => {
    if (newSecondRow) {
      navigate(`/product/${newSecondRow[e.target.id].product_id}`);
    }
  };
  const popularFirstRowGoMain = e => {
    if (popularFirstRow) {
      navigate(`/product/${popularFirstRow[e.target.id].product_id}`);
    }
  };
  const popularSecondRowGoMain = e => {
    if (popularSecondRow) {
      navigate(`/product/${popularSecondRow[e.target.id].product_id}`);
    }
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
            {newFirstRow &&
              newFirstRow.map((data, i) => {
                return (
                  <div key={i}>
                    <ItemCard
                      data={data}
                      id={i}
                      goToDetail={newFirstRowGoMain}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style}>
            {newSecondRow &&
              newSecondRow.map((data, i) => {
                return (
                  <div key={i}>
                    <ItemCard
                      data={data}
                      id={i}
                      goToDetail={newSecondRowGoMain}
                    />
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
            {popularFirstRow &&
              popularFirstRow.map((data, i) => {
                return (
                  <div key={i}>
                    <ItemCard
                      data={data}
                      id={i}
                      goToDetail={popularFirstRowGoMain}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_box} style={style2}>
            {popularSecondRow &&
              popularSecondRow.map((data, i) => {
                return (
                  <div key={i}>
                    <ItemCard
                      data={data}
                      id={i}
                      goToDetail={popularSecondRowGoMain}
                    />
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
