import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HelmetProvider from './components/HelmetProvider/HelmetProvider';
import Navigation from './components/NavigationBar/NavigationBar';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import GlobalStyles from './styles/GlobalStyles';
import KakaoRedirectHandler from './components/Kakao/KakaoRedirect';
import MyPage from './pages/MyPage/Mypage';
import Review from './pages/Review/Review';

const { BrowserRouter, Routes, Route } = require('react-router-dom');

function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider />
      <GlobalStyles />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/review" element={<Review />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
