import GeneralsMascot from '../assets/GeneralsMascot.png'
import Generals from '../assets/TShirtVariation.png'

const Header = () => {

  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img className='logo-img' src={GeneralsMascot} />
        <img className='logo-text' src={Generals} />
      </a>
      <div className='nav'>
        <a href=''>About</a>
        <a href=''>Sponsors</a>
        <a>Forms</a>
        <a href="">Contact</a>
      </div>
      
    </header>
  );
};

export default Header;
