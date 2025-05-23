import StarsShield from '../assets/Logos/GeneralsShieldStars.png';
import { ONLINEFORMSDATA } from '../data/FormsData';
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
        <h2>Tryouts June 18, 2025</h2>
        <button onClick={() => window.open(ONLINEFORMSDATA[0].url)} className='form-button'>Register Here</button>
        <h3>Looking for boys in Weber & Davis Counties.</h3>
        </div>
    
    </>
  );
};

export default Body;
