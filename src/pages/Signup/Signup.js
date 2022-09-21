import React, { useState, useEffect, useRef } from 'react';

import styles from './Signup.module.scss';

const USER_REGEX = /^[a-zA-Z\s]{3,30}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const pwdRef = useRef('');
  const emailRef = useRef('');
  const nameRef = useRef('');
  const phoneRef = useRef('');

  // error 메시지 값 설정
  const [exist, setExist] = useState(false);
  const [signedUp, setSignedUp] = useState('');

  // backend에 post될 값
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // 에러 메시지 조건, 버튼 활성&비활성
  const [validPwd, setValidPwd] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const postInfoHandler = e => {
    fetch('URL', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        pwd: pwdRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.signup_title}>
        <h1>회원가입</h1>
        <p>회원가입 페이지 입니다</p>
      </div>

      <form className={styles.signup_input_border}>
        <div className={styles.signup_input_wrapper}>
          <div>아이디</div>
          <input placeholder="이메일 입력" ref={emailRef} />
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호</div>
          <input placeholder="비밀번호 입력" ref={pwdRef} />
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호 확인</div>
          <input placeholder="비밀번호 확인" />
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>이름</div>
          <input placeholder="이름 입력" ref={nameRef} />
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>전화번호</div>
          <input placeholder="휴대전화 번호 입력" ref={phoneRef} />
        </div>
      </form>
      <div className={styles.signup_btn_wrapper}>
        <a href="">개인정보 처리방침</a>

        <label htmlFor="agree">
          <input type="checkbox" id="agree" />
          약관에 동의합니다
        </label>
        <button onClick={postInfoHandler} className={styles.signup_btn}>
          확인
        </button>
      </div>
    </div>
  );
}

export default Signup;
