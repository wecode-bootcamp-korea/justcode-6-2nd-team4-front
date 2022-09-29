import React, { useState } from 'react';
import styles from './Button.module.scss';

function Button(props) {
  const titleText = props.title;
  const clickEvent = props.event;
  const inputValue = props.inputValue;
  const navigate = props.navigateMain;
  const [onHover, setOnHover] = useState(false);

  const enterMouse = () => {
    setOnHover(true);
  };

  const leaveMouse = () => {
    setOnHover(false);
  };

  return (
    <button
      className={
        onHover ? `${styles.signup_btn_enter}` : `${styles.signup_btn_leave}`
      }
      onClick={clickEvent}
      disabled={inputValue}
      onMouseUp={navigate}
      onMouseEnter={enterMouse}
      onMouseLeave={leaveMouse}
    >
      {titleText}
    </button>
  );
}

export default Button;
