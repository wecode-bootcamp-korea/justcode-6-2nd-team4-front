import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HelmetProvider from './components/HelmetProvider/HelmetProvider';
import Navigation from './components/NavigationBar/NavigationBar';
import Category from './pages/Category/Category';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import GlobalStyles from './styles/GlobalStyles';

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
        <Route path="/themeCategory/:id" element={<Category />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
