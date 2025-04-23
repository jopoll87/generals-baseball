
const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img className='logo-img' src='../../public/GeneralsMascot.png'/>
        <img className='logo-text' src='../../public/TShirtVariation.png' />
      </a>
      <nav className='nav'>
        <a href="">About</a>
        <a href="">Sponsors</a>
        <a href=''>Forms</a>
        <a href=''>Contact</a>
      </nav>
    </header>
  )
}

export default Header