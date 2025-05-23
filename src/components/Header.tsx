import { Link } from 'react-router-dom';
import { useState } from 'react';
import GeneralsMascot from '../assets/Logos/GeneralsMascot.png'
import Generals from '../assets/Logos/GeneralsBlack.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('onClick, new isMenuOpen:', !isMenuOpen); // Log new state
  };

  console.log('Header render, isMenuOpen:', isMenuOpen); // Log on render
  return (
    <header className='header'>
      <div className="header-top-row">
        <Link to='/' className='logo'>
          <img className='logo-img' src={GeneralsMascot} />
          <img className='logo-text' src={Generals} />
        </Link>
        <button className='hamburger-menu' onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`nav ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
        <Link to='/about'>About</Link>
        <Link to='/sponsors'>Sponsors</Link>
        <Link to='/forms'>Forms</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
    </header>
  );
};

export default Header;
