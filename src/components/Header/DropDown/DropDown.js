import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DropDown.module.scss';

function DropDown({ title }) {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const goMyPage = () => {
    navigate('/mypage');
  };
  const goMain = () => {
    navigate('/');
  };
  const goCart = () => {
    navigate('/cart');
  };

  useEffect(() => {});

  const handleLogout = () => {
    localStorage.clear();
    goMain();
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.drop_down_title} onClick={() => setDropDown(true)}>
        {title}
      </div>

      <div className={styles.dropdown_wrapper}>
        {dropDown ? (
          <ul
            className={styles.drop_down_list}
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <li onClick={goMyPage}>마이페이지</li>
            <li onClick={goCart}>장바구니</li>
            <li>1:1 채팅</li>
            <li onClick={handleLogout}>로그아웃</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
