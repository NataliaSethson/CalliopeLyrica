import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="top-banner-bar">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        
        <Link to="/" className="main-logo-link">
          <img src='/banner.png' alt='Calliope Lyrica' className="banner-fixed" />
        </Link>
        
        <div className="placeholder"></div>
      </div>

     
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to='/institucional' onClick={() => setIsOpen(false)}>INSTITUCIONAL</Link></li>
            <li><Link to='/CantoLirico' onClick={() => setIsOpen(false)}>CÁTEDRA DE CANTO LÍRICO</Link></li>
            <li><Link to='/Repertorio' onClick={() => setIsOpen(false)}>CÁTEDRA DE REPERTORIO</Link></li>
            <li><Link to='/Conciertos' onClick={() => setIsOpen(false)}>CONCIERTOS</Link></li>
          </ul>
        </nav>
      </div>

     
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
};

export default NavBar;