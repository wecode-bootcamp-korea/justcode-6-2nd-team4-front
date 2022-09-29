import React, { useState } from 'react';

import styles from './Login.module.scss';
import logo from '../../../src/assets/images/logo.png';
import Modal from '../../../src/components/LoginModal/Modal.js';
import { KAKAO_AUTH_URL } from '../../components/SignupComp/Kakao/Kakao';

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form>
        <section className={styles.login_title_wrapper}>
          <h1>안녕하세요!</h1>
          <p>
            SNS 간편 로그인이나 사조의 공방에 로그인하고 다얀한 작품을
            만나보세요!
          </p>
        </section>

        <section className={styles.login_button_wrapper}>
          <a href={KAKAO_AUTH_URL}>
            <img
              alt="카카오"
              src="https://cdn-icons-png.flaticon.com/512/3991/3991999.png"
            />
            <span> 카카오 계정으로 계속하기</span>
          </a>

          <button onMouseDown={() => setIsOpen(true)} onClick={modalHandler}>
            <img alt="로고" src={logo} />
            <span>사조의 공방으로 계속하기</span>
          </button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </section>

        <section className={styles.login_link_wrapper}>
          <span>모두의 공방이 처음이신가요?</span>
          <a href="/signup">회원가입</a>
        </section>
      </form>
    </div>
  );
}

export default Login;
