import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import MyInfo from './MyInfo/MyInfo';
import logo from '../../../src/assets/images/logo.png';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const tokenStatus = localStorage.getItem('token');

    if (tokenStatus) {
      tokenStatus === null ? setLoggedIn(false) : setLoggedIn(true);
    }
  });

  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };
  const goMain = () => {
    navigate('/');
  };
  const goSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <section className={styles.header_border}>
        <nav className={styles.user_info}>
          {loggedIn ? (
            <MyInfo />
          ) : (
            <div className={styles.user_info_nav}>
              <div onClick={goLogin}>로그인</div>
              <div onClick={goSignup}>회원가입</div>
            </div>
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
