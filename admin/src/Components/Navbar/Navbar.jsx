import "./Navbar.css";
// import navlogo from '../../assets/h'
// import navProfile from '../../assets/nav-profile.svg'
import navlogo from '../../assets/nav-logo.svg'
 import navProfile from '../../assets/hero1-img.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Navigation Logo" className="nav-logo" />
      <img src={navProfile} className='nav-profile' alt="Profile Icon" />
    </div>
  );
};

export default Navbar;
