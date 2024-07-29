import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import lekanmen from "./Components/Assets/lekanmen.jpg";
import lekenkids from "./Components/Assets/lekankids.jpg";
import lekenwomen from "./Components/Assets/lekanwomen.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={lekanmen} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={lekenwomen} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={lekenkids} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
