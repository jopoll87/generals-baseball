import { Link } from 'react-router-dom';
import GeneralsMascot from '../assets/Logos/GeneralsMascot.png'
import Generals from '../assets/Logos/GeneralsBlack.png'

const Header = () => {

  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img className='logo-img' src={GeneralsMascot} />
        <img className='logo-text' src={Generals} />
      </Link>
      <div className='nav'>
        <Link to='/about'>About</Link>
        <Link to='/sponsors'>Sponsors</Link>
        <Link to='/forms'>Forms</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
    </header>
  );
};

export default Header;
