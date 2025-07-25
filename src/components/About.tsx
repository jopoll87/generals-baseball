import Header from './Header';
import Coaches from './Coaches';

const About = () => {
  return (
    <>
      <Header />
      <div className='body'>
        <div className='mission'>
          <h2>Generals Mission</h2>
          <div className='about-text'>
            <p>
              Our mission is to foster the growth of young athletes through
              exceptional player development, cultivating a positive and
              supportive atmosphere, and instilling healthy competitiveness.
            </p>
            <p>
              We are a family-oriented team dedicated to creating lasting
              memories, building character, and forging lifelong bonds through
              the love of baseball
            </p>
          </div>
        </div>
        <Coaches />
      </div>
    </>
  );
};

export default About;
