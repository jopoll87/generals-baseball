import { Link } from 'react-router-dom';
import StarsShield from '../assets/Logos/GeneralsShieldStars.png';
import Header from './Header';

const Body = () => {
  return (
    <>
        <Header />
        <div className='body'>
        <h1>Starting Fall 2025</h1>
        <img
            src={StarsShield}
            alt='Generals main logo'
        />
        <h2>Tryouts June 2025</h2>
        <h3>Looking for boys in Weber & Davis Counties.</h3>
        <p><Link to='/contact' id='link'>Contact</Link> us via email or phone to get tryout information.</p>
        </div>
    
    </>
  );
};

export default Body;
