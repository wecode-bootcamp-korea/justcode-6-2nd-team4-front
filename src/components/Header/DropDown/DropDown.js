import { useState } from 'react';
import styles from './DropDown.module.scss';

function DropDown({ title }) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.drop_down_title}
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => {
          setDropDown(false);
        }}
      >
        {title}
      </div>

      <div>
        {dropDown ? (
          <ul className={styles.drop_down_list}>
            <li>마이페이지</li>
            <li>구매관리</li>
            <li>1:1 채팅</li>
            <li>로그아웃</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
