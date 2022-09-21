import React from "react";
import styles from "./MyInfo.module.scss";
import DropDown from "../DropDown/DropDown";

function MyInfo() {
  return (
    <div className={styles.container}>
      <nav className={styles.user_info_nav}>
        <img
          alt="프로필"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        />
        <DropDown title="사용자님" />
        <div>고객센터</div>
      </nav>
    </div>
  );
}

export default MyInfo;
