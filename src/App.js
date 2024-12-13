
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home';
import MenuTwo from './components/menutwo/MenuTwo';
import MenuThree from './components/menuthree/MenuThree';
import MenuFour from './components/menufour/MenuFour';
import MenuFive from './components/menufive/MenuFive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MenuTwo />} />
        <Route path="/features" element={<MenuThree />} />
        <Route path="/blog" element={<MenuFour />} />
        <Route path="/menu-five" element={<MenuFive />} />
      </Routes>
    </Router>
  );
}

export default App;
