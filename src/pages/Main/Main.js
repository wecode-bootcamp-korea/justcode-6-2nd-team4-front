import styles from './Main.module.scss';
import SimpleSlider from '../../components/MainImageSlider/ImageSlider';
import MainItemList from '../../components/MainItemList/MainItemList';

function Main() {
  return (
    <div>
      <SimpleSlider />
      <MainItemList />
    </div>
  );
}

export default Main;
