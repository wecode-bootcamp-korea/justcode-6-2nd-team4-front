import { useEffect, useState } from 'react';
import styles from './DropDown.module.scss';

function DropDown({ title }) {
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {});

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.drop_down_title}
        // onMouseEnter={() => setDropDown(true)}
        onClick={() => setDropDown(true)}
        // onMouseLeave={() => {
        //   setDropDown(false);
        // }}
      >
        {title}
      </div>

      <div className={styles.dropdown_wrapper}>
        {dropDown ? (
          <ul className={styles.drop_down_list}>
            <li>마이페이지</li>
            <li>구매관리</li>
            <li>1:1 채팅</li>
            <li onClick={handleLogout}>로그아웃</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
