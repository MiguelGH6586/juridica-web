import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
//brands icon
// import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBarComponent = function (probs) {
  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <a className="logo" href="#">
              <div className="images">
                <img className="logo-forDarck" src="" title="JURÍDICA" />
                <img className="logo-forLight" src="" title="JURÍDICA" />
              </div>
              <h2>
                JURÍDICA<span>.</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Join
            </a>
          </li>
          <li>
            <span className="nav-link theme-toggle">
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faMoon} />
              {/* <FontAwesomeIcon icon={solid('fa-solid fa-sun')} /> */}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBarComponent;
