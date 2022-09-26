import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <header>
    <nav className="header__nav">
      <div className="navbar">
        <h1 className="logo">Bookstore CMS</h1>
        <ul>
          <li className="navMissions">
            <Link to="/Missions">Missions</Link>
          </li>
          <li className="navRockets">
            <Link to="/Profile">Rockets</Link>
          </li>
          <li className="navProfile">
            <Link to="/Profile">
              <FaUser />
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="user">
        <FaUser />
      </div>
    </nav>
  </header>
);

export default NavBar;
