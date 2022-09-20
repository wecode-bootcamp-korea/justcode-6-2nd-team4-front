import styles from "./DropDownMenu.module.scss";
import carpentry from "../../../../assets/images/carpentry.png";
import leather from "../../../../assets/images/leather.png";
import jewelry from "../../../../assets/images/jewelry.png";
import pottery from "../../../../assets/images/pottery.png";
import tools from "../../../../assets/images/tools.png";

function WorkMenu({ workMenuOpen }) {
  return (
    <div
      className={
        workMenuOpen ? `${styles.activate}` : `${styles.beforeactivate}`
      }
    >
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={carpentry} alt="목공방 카테고리 이미지"></img>
          <div>목공방</div>
        </div>
        <div className={styles.box}>
          <img src={leather} alt="가죽공방 카테고리 이미지"></img>
          <div>가죽공방</div>
        </div>
        <div className={styles.box}>
          <img src={jewelry} alt="금속공방 카테고리 이미지"></img>
          <div>금속공방</div>
        </div>
        <div className={styles.box}>
          <img src={pottery} alt="도예공방 카테고리 이미지"></img>
          <div>도예공방</div>
        </div>
        <div className={styles.box}>
          <img src={tools} alt="기타공방 카테고리 이미지"></img>
          <div>기타공방</div>
        </div>
      </div>
    </div>
  );
}
export default WorkMenu;
