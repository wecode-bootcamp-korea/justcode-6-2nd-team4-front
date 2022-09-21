import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../src/assets/images/logo.png';

function Footer() {
  return (
    <div className={styles.container}>
      <section className={styles.footer_border}>
        <div className={styles.footer_img_wrapper}>
          <img alt="logo" src={logo} />
        </div>
        <div className={styles.footer_description_wrapper}>
          <dl className={styles.footer_description_text}>
            <dt>법인명(상호) : (주)4조의 공방</dt>
            <dt>대표자(성명) : 김코드</dt>
            <dt>개인정보보호책임자 : 김코드</dt>
            <dt>사업자등록번호 : 123-45-67890</dt>
            <dt>통신판매업 : 제 0000-서울-0000호</dt>
          </dl>
        </div>

        <div className={styles.footer_contact}>
          <div className={styles.footer_icon_wrapper}>
            <img
              className="footer_icon"
              alt="youtube"
              src="https://cdn-icons-png.flaticon.com/512/3938/3938026.png"
            />
            <img
              className="footer_icon"
              alt="instagram"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            />
            <img
              className="footer_icon"
              alt="facebook"
              src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
            />
            <img
              className="footer_icon"
              alt="kakaopage"
              src="https://cdn-icons-png.flaticon.com/512/3991/3991999.png"
            />
          </div>

          <dl className={styles.footer_contact_text}>
            <dt>고객센터(Tel) : 0101-1234-5678</dt>
            <dt>고객센터(mail) : codekim@justcode.com</dt>
            <dt>영업시간 : 10:00 - 19:00</dt>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default Footer;
