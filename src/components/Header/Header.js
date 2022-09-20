import { useState } from "react";
import "./MyInfo/MyInfo";

import styles from "./Header.module.scss";
import MyInfo from "./MyInfo/MyInfo";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className={styles.container}>
      <section className={styles.header_border}>
        <div className={styles.header_wrapper}>
          <nav className={styles.user_info_nav}>
            {loggedIn ? <MyInfo /> : <span>회원가입</span>}
          </nav>

          <div className={styles.header_logo_wrapper}>
            <img
              className={styles.header_logo}
              src="https://d6j35gv9ux3qi.cloudfront.net/image/new-header-logo.svg"
              alt="header logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
