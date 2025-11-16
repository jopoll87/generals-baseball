// import StarsShield from '../assets/Logos/GeneralsShieldStars.png';
import TeamPhoto from '../assets/Logos/GeneralsEndFall2025.png'
import GameChanger from './GameChanger';
import Header from './Header';

const Body = () => {
  return (
    <>
      <Header />
      <div className='body'>
        <h1>Amazing First Season</h1>
        {/* <img id='main-logo'
            src={StarsShield}
            alt='Generals main logo'
        /> */}
        <img className='team-photo' src={TeamPhoto} alt='Generals Team Photo' />
        <h2>Upcoming Games</h2>
        <GameChanger />
      </div>
    </>
  );
};

export default Body;
