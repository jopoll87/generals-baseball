// import StarsShield from '../assets/Logos/GeneralsShieldStars.png';
import Team from '../assets/Logos/TeamBannerPhoto.png';
import GameChanger from './GameChanger';
import Header from './Header';

const Body = () => {
  return (
    <>
      <Header />
      <div className='body'>
        <h1>Inaugural Season Fall 2025</h1>
        {/* <img id='main-logo'
            src={StarsShield}
            alt='Generals main logo'
        /> */}
        <img id='team-photo' src={Team} alt='Generals Team Photo' />
        <h2>Upcoming Games</h2>
        <GameChanger />
      </div>
    </>
  );
};

export default Body;
