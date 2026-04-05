import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import ProductDetais from "./pages/productDetails/ProductDetais";
import Cart from "./pages/Cart/cart";
import CategoryPage from "./pages/Category/CategoryPage";
import Searchpage from "./pages/Search/Searchpage";
import Category from "./components/Category/Category";
import Wishlist from "./pages/Wishlist/Wishlist";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetais />} />
              <Route path="/category/" element={<Category />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/search/:searchTerm" element={<Searchpage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
