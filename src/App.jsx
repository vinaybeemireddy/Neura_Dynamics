import {Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Favorites from './pages/Favorites';
import ProductDetail from './pages/ProductDetails';

export default function App() {
  return (
    <div>
      <nav className="flex justify-between p-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    
    </div>
    
      
  );
}
