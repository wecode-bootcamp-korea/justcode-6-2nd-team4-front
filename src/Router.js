import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import DropDown from "./components/Header/DropDown/DropDown";

const { BrowserRouter, Routes, Route } = require("react-router-dom");
const { Reset } = require("styled-reset");

function Router() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dropdown" element={<DropDown />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
