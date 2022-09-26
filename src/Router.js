import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HelmetProvider from './components/HelmetProvider/HelmetProvider';
import Navigation from './components/NavigationBar/NavigationBar';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import GlobalStyles from './styles/GlobalStyles';
import ProductDetailProvider from './pages/ProductDetail/ProductDetailProvider';

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
        <Route path="/product/:productId" element={<ProductDetailProvider />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
