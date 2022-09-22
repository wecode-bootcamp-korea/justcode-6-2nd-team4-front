import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import MyInfo from './MyInfo/MyInfo';
import logo from '../../../src/assets/images/logo.png';

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <section className={styles.header_border}>
        <nav className={styles.user_info_nav}>
          {loggedIn ? (
            <MyInfo />
          ) : (
            <span>
              <span>로그인</span>
              <span>회원가입</span>
            </span>
          )}
        </nav>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo_wrapper}>
            <img
              className={styles.header_logo}
              src={logo}
              alt="header logo"
              onClick={goMain}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
