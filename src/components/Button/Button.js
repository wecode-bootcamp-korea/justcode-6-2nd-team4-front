import React, { useState } from 'react';
import styles from './Button.module.scss';

function Button(props) {
  const title = props.title;
  const signupClick = props.event;
  const [onHover, setOnHover] = useState(false);

  const enterMouse = () => {
    setOnHover(true);
  };

  const leaveMouse = () => {
    setOnHover(false);
  };

  return (
    <button
      // className={styles.signup_btn}
      className={
        onHover ? `${styles.signup_btn_enter}` : `${styles.signup_btn_leave}`
      }
      onClick={signupClick}
      onMouseEnter={enterMouse}
      onMouseLeave={leaveMouse}
    >
      {title}
    </button>
  );
}

export default Button;
