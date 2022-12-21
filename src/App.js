import './App.css';
import Navbar from './components/Global/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/utils/Home/Home';
import Cart from './components/utils/Cart/Cart';
import Product from './components/utils/Products/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
