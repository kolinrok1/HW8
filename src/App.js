import './App.css';
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import CartPage from './components/CartPage/CartPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import MainPage from './components/MainPage/MainPage';
import ProductPage from './components/ProductPage/ProductPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/catalogue" element={<CatalogPage />}/>
          <Route path="/product" element={<ProductPage />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
