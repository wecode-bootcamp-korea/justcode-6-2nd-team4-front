import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import DaumPost from '../../components/SignupComp/Adress/Adress';
import styles from './Signup.module.scss';

const NAME_REGEX = /^[a-zA-Z\s]{3,30}$/;
const PHONE_REGEX = /^[0-9]{10,30}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

function Signup() {
  const childRef = useRef('');
  const [address, setAddress] = useState('');

  const getChildState = e => {
    e.preventDefault();
    setOpenPostcode(current => !current);
    setAddress(childRef.current.getChild());
  };

  const pwdRef = useRef('');
  const emailRef = useRef('');
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const samePwdRef = useRef('');
  const addressRef = useRef('');
  const detailedAddressRef = useRef('');

  const [openPostcode, setOpenPostcode] = useState(false);

  const [error, setError] = useState(null);

  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detailedAddress, setdetailedAddress] = useState('');

  const [validPwd, setValidPwd] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validName, setValidName] = useState(false);

  const [validSamePwd, setValidSamePwd] = useState(false);
  const [samePwd, setSamePwd] = useState('');

  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidSamePwd(pwd === samePwd);
  }, [pwd, samePwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  async function postInfoHandler() {
    setError(null);
    try {
      const res = await fetch(
        'https://react-http-c7892-default-rtdb.firebaseio.com/comments.json',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            pwd: pwdRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            detailed_address: detailedAddressRef.current.value,
          }),
        }
      );
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error.msessage);
    }
    goMain();
  }

  return (
    <div className={styles.container}>
      <div className={styles.signup_title}>
        <h1>회원가입</h1>
        <p>회원가입 페이지 입니다</p>
      </div>

      <form className={styles.signup_input_border}>
        <div className={styles.signup_input_wrapper}>
          <div>아이디</div>
          <input
            id="id"
            placeholder="이메일 입력"
            ref={emailRef}
            autoComplete="off"
            onChange={e => setEmail(e.target.value)}
          />

          <p
            className={
              email && !validEmail
                ? `${styles.cond_msg}`
                : `${styles.offscreen}`
            }
          >
            이메일 형식은 @ .com 입니다. 이메일을 확인해주세요.
          </p>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호</div>
          <input
            placeholder="비밀번호 입력"
            type="password"
            ref={pwdRef}
            onChange={e => setPwd(e.target.value)}
          />
          <p
            id="pwdNote"
            className={
              pwd && !validPwd ? `${styles.cond_msg}` : `${styles.offscreen}`
            }
          >
            비밀번호는 알파벳 대소문자 특수기호 숫자조합입니다.
          </p>
          <p
            id="pwdNote"
            className={validPwd ? `${styles.cond_msg}` : `${styles.offscreen}`}
          >
            사용가능한 비밀번호입니다.
          </p>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호 확인</div>
          <input
            placeholder="비밀번호 확인"
            type="password"
            ref={samePwdRef}
            onChange={e => setSamePwd(e.target.value)}
          />
          <p
            id="smaePwdNote"
            className={
              samePwd && !validSamePwd
                ? `${styles.cond_msg}`
                : `${styles.offscreen}`
            }
          >
            비밀번호가 일치하지 않습니다.
          </p>
          <p
            id="smaePwdNote"
            className={
              samePwd && validSamePwd
                ? `${styles.cond_msg}`
                : `${styles.offscreen}`
            }
          >
            비밀번호가 일치합니다.
          </p>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>이름</div>
          <input
            placeholder="이름 입력"
            ref={nameRef}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>전화번호</div>
          <input
            placeholder="휴대전화 번호 입력"
            ref={phoneRef}
            onChange={e => setPhone(e.target.value)}
          />
          <p
            id="phoneNote"
            className={
              phone && !validPhone
                ? `${styles.cond_msg}`
                : `${styles.offscreen}`
            }
          >
            " - 을 제외한 전화번호를 입력해주세요.""
          </p>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>주소</div>
          <input
            disabled
            value={address}
            ref={addressRef}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        <div className={styles.post_wrapper}>
          <button onClick={getChildState}>주소선택</button>
          {openPostcode && <DaumPost ref={childRef} />}
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>상세주소</div>
          <input
            placeholder="상세주소를 입력해 주세요"
            ref={detailedAddressRef}
            onChange={e => setdetailedAddress(e.target.value)}
          />
        </div>
      </form>

      <div className={styles.signup_btn_wrapper}>
        <a href="/">개인정보 처리방침</a>

        <label htmlFor="agree">
          <input type="checkbox" id="agree" />
          약관에 동의합니다
        </label>

        <Button
          event={postInfoHandler}
          inputValue={!validPwd || !validEmail || !validSamePwd ? true : false}
          title="확인"
        />
      </div>
    </div>
  );
}

export default Signup;
