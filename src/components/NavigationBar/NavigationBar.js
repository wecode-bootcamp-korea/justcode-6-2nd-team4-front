import DropDownMenu from './DropDownMenu';
import WorkMenu from './WorkMenu';
import styles from './NavigationBar.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [fontColor, setFontColor] = useState(true);
  const [fontColor2, setFontColor2] = useState(true);
  const handleMouseEnter = () => {
    setMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  let fontStyle = {
    color: 'rgb(3, 179, 238)',
  };

  let black = {
    color: '#000000',
  };

  const handleFont = () => {
    setFontColor(true);
    setFontColor2(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <div
            className={styles.design_box}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setFontColor(true);
              setFontColor2(true);
            }}
            style={fontColor ? fontStyle : black}
          >
            디자인 마켓
          </div>
        </Link>
        <Link to="/developers">
          <div
            className={styles.box}
            onClick={() => {
              setFontColor(false);
              setFontColor2(false);
            }}
            style={fontColor2 ? black : fontStyle}
          >
            제작자
          </div>
        </Link>
      </div>
      {menuOpen ? (
        <DropDownMenu
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleFont={handleFont}
        />
      ) : null}
    </div>
  );
}
export default Navigation;
