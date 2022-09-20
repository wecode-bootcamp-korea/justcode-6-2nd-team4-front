import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

const { BrowserRouter, Routes, Route } = require("react-router-dom");
const { Reset } = require("styled-reset");

function Router() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
