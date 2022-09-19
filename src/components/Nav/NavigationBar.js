import DropDownMenu from "./DropDownMenu/DropDownMenu";
import styles from "./NavigationBar.module.scss";

function Navigation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>디자인 마켓</div>
        <div className={styles.box}>맞춤 제작소</div>
      </div>
      <DropDownMenu />
    </div>
  );
}
export default Navigation;
