import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AutomovelPage from './pages/AutomovelPage';
import MotoristaPage from './pages/MotoristaPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automoveis" element={<AutomovelPage />} /> // rotas para a página de automóveis
        <Route path="/motoristas" element={<MotoristaPage />} /> // rotas para a página de motoristas
      </Routes>
    </Router>
  );
}

export default App;