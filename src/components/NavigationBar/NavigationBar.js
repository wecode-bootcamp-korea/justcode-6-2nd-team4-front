import DropDownMenu from './DropDownMenu';
import WorkMenu from './WorkMenu';
import styles from './NavigationBar.module.scss';
import React, { useState } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workMenuOpen, setWorkMenuOpen] = useState(false);
  const [fontColor, setFontColor] = useState(true);
  const handleMouseEnter = () => {
    setMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setMenuOpen(false);
  };
  const handleMouseEnterWorkMenu = () => {
    setWorkMenuOpen(true);
  };
  const handleMouseLeaveWorkMenu = () => {
    setWorkMenuOpen(false);
  };

  let fontStyle = {
    color: 'rgb(3, 179, 238)',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.design_box}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setFontColor(true);
          }}
          style={fontColor ? fontStyle : null}
        >
          디자인 마켓
        </div>
        <div
          className={styles.box}
          onMouseEnter={handleMouseEnterWorkMenu}
          onMouseLeave={handleMouseLeaveWorkMenu}
          onClick={() => setFontColor(false)}
          style={fontColor ? null : fontStyle}
        >
          맞춤 제작소
        </div>
      </div>
      {menuOpen ? (
        <DropDownMenu
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      ) : null}
      {workMenuOpen ? (
        <WorkMenu
          handleMouseEnterWorkMenu={handleMouseEnterWorkMenu}
          handleMouseLeaveWorkMenu={handleMouseLeaveWorkMenu}
        />
      ) : null}
    </div>
  );
}
export default Navigation;
