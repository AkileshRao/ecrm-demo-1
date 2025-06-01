import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "@/pages/ListingPage";
import AddProductPage from "@/pages/AddProductPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import Navbar from "@/components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/cart/:productId" element={<ProductDetails />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
