import './App.css';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart/Cart';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './global/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </Router>

    </>

  );
}

export default App;
