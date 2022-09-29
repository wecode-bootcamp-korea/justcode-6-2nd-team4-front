import { Link } from 'react-router-dom';
import styles from './DropDownMenu.module.scss';
import furniture from '../../assets/images/furniture.png';
import cutting from '../../assets/images/cutting-board.png';
import pet from '../../assets/images/cat-toy.png';
import fashion from '../../assets/images/bag-shoe.png';
import accessory from '../../assets/images/wedding-rings.png';
import objects from '../../assets/images/plant.png';
import teddy from '../../assets/images/teddy-bear.png';

function DropDownMenu({ handleMouseEnter, handleMouseLeave, handleFont }) {
  return (
    <div
      className={styles.activate}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        <Link to="/themeCategory/1?offset=0">
          <div className={styles.box} onClick={handleFont}>
            <img src={furniture} alt="가구 카테고리 이미지"></img>
            <div>가구</div>
          </div>
        </Link>
        <Link to="/themeCategory/2?offset=0">
          <div className={styles.box}>
            <img src={cutting} alt="주방용품 카테고리 이미지"></img>
            <div>주방용품</div>
          </div>
        </Link>
        <Link to="/themeCategory/3?offset=0">
          <div className={styles.box}>
            <img src={pet} alt="반려용품 카테고리 이미지"></img>
            <div>반려용품</div>
          </div>
        </Link>
        <Link to="/themeCategory/4?offset=0">
          <div className={styles.box}>
            <img src={fashion} alt="패션 잡화 카테고리 이미지"></img>
            <div>패션 잡화</div>
          </div>
        </Link>
        <Link to="/themeCategory/5?offset=0">
          <div className={styles.box}>
            <img src={accessory} alt="액세서리 카테고리 이미지"></img>
            <div>액세서리</div>
          </div>
        </Link>
        <Link to="/themeCategory/6?offset=0">
          <div className={styles.box}>
            <img src={objects} alt="소품 카테고리 이미지"></img>
            <div>소품</div>
          </div>
        </Link>
        <Link to="/themeCategory/6?offset=0">
          <div className={styles.box}>
            <img src={teddy} alt="기타 카테고리 이미지"></img>
            <div>기타</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default DropDownMenu;
