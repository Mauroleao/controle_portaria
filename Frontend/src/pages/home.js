// filepath: /c:/Users/mauro/OneDrive/Desktop/controle_portaria/Frontend/src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/automoveis">Go to Automóveis</Link>
      <Link to="/automoveis">Go to Automóveis</Link>
    </div>
  );
}

export default Home;