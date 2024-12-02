import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <Header /> 
      <main className="main-content">
        <div className="link-container">
          <Link to="/automoveis">  {/* redirecimento para a página de automóveis */}
            <img 
              src={require('../assets/images/automoveis.png')} 
              alt="Pagina de Automoveis" 
              className="button-image" 
            />
          </Link>
          <Link to="/motoristas">  {/* redirecimento para a página de motoristas */}
            <img 
              src={require('../assets/images/motoristas.png')} 
              alt="Pagina de Motoristas" 
              className="button-image" 
            />
          </Link>
        </div>
      </main>
      <Footer /> 
    </div>
  );
}

export default Home;
