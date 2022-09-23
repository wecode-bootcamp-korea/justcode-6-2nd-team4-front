import React from 'react';
import { useState, useEffect } from 'react';
import styles from './MyInfo.module.scss';
import DropDown from '../DropDown/DropDown';

function MyInfo() {
  const [userName, setUserName] = useState('사용자님');

  useEffect(() => {
    const nameStatus = localStorage.getItem('userName');
    if (nameStatus) {
      nameStatus === null ? setUserName('사용자님') : setUserName(nameStatus);
    }
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.user_info_nav}>
        <img
          alt="프로필"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        />
        <DropDown title={userName} />
        <div>고객센터</div>
      </nav>
    </div>
  );
}

export default MyInfo;
