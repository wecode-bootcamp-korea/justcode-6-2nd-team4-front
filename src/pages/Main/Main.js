import styles from './Main.module.scss';
import Navigation from '../../components/NavigationBar/NavigationBar';
import SimpleSlider from '../../components/MainImageSlider/ImageSlider';

function Main() {
  return (
    <div>
      <Navigation />
      <SimpleSlider />
    </div>
  );
}

export default Main;
