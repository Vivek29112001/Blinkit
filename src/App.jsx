import './App.css'
import Home from './pages/Home'
import CartPage from "./pages/CartPage"
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App
