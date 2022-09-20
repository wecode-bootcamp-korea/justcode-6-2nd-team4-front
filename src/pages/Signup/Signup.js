import styles from './Signup.module.scss';

function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.signup_title}>
        <h1>회원가입</h1>
        <p>회원가입 페이지 입니다</p>
      </div>

      <form className={styles.signup_input_border}>
        <div className={styles.signup_input_wrapper}>
          <div>아이디</div>
          <input placeholder="이메일 입력"></input>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호</div>
          <input placeholder="비밀번호 입력"></input>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>비밀번호 확인</div>
          <input placeholder="비밀번호 확인"></input>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>이름</div>
          <input placeholder="이름 입력"></input>
        </div>

        <div className={styles.signup_input_wrapper}>
          <div>전화번호</div>
          <input placeholder="휴대전화 번호 입력"></input>
        </div>
      </form>
      <div className={styles.signup_btn_wrapper}>
        <a href="">개인정보 처리방침</a>

        <label htmlFor="agree">
          <input type="checkbox" id="agree"></input>
          약관에 동의합니다
        </label>
        <button className={styles.signup_btn}>확인</button>
      </div>
    </div>
  );
}

export default Signup;
