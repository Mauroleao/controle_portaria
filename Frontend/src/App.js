import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AutomovelPage from './pages/AutomovelPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automoveis" element={<AutomovelPage />} />
      </Routes>
    </Router>
  );
}

export default App;