import Header from './Header';

const Contact = () => {
  const handleClick = () => {
    return (window.location.href = 'mailto:utahgeneralsbaseball@gmail.com');
  };

  return (
    <>
      <Header />
      <div className='body'>
        <div className='contact-info'>
          <button onClick={handleClick} className='form-button' style={{backgroundColor: '#ceb36e'}}>
            Email us
          </button>
          <h4>Phone #:</h4>
          <p>(801) 686-8511</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
