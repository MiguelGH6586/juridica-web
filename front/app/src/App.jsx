import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import HomePage from './pages/HomePage';
import Price from './pages/Price';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Price />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
