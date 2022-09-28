import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './Developers.module.scss';

function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);

  useEffect(() => {
    fetch('/mocks/Developer/Developers.json')
      .then(res => res.json())
      .then(data => setDevelopers(data.developers))
      .then(setFront(developers.front))
      .then(setBack(developers.back));
  }, [developers, front, back]);

  return (
    <div className={styles.developers_wrapper}>
      <div className={styles.title}>프론트엔드</div>
      <div className={styles.front_container}>
        {front &&
          front.map((front, i) => {
            return (
              <div key={i} className={styles.front_card_box}>
                <ItemCard data={front} />
              </div>
            );
          })}
      </div>
      <div className={styles.title}>백엔드</div>
      <div className={styles.front_container}>
        {back &&
          back.map((back, i) => {
            return (
              <div key={i} className={styles.front_card_box}>
                <ItemCard data={back} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Developers;
