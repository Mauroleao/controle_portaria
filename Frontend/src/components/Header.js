import React from 'react';
import '../assets/styles/header.css'; 


//  Header padrão da aplicação 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={require('../assets/images/logo.png')} alt="Logo" className="logo" />
      </div>
      <h1>Contole de Portaria 1.0</h1>
    </header>
  );
}

export default Header;
