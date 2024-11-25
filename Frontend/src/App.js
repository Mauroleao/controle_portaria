import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AutomovelPage from './pages/AutomovelPage';
import MotoristaPage from './pages/MotoristaPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automoveis" element={<AutomovelPage />} />
        <Route path="/motoristas" element={<MotoristaPage />} />
      </Routes>
    </Router>
  );
}

export default App;